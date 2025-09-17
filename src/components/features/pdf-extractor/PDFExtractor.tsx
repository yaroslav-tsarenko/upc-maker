"use client";

import React, { JSX, useEffect } from "react";
import { Document, Page, Text, StyleSheet, pdf } from "@react-pdf/renderer";
import parse from "html-react-parser";
import { AiOrder, useAllOrders } from "@/context/AllOrdersContext";

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: "Helvetica",
        lineHeight: 1.5,
        flexDirection: "column",
    },
    heading1: { fontSize: 20, marginVertical: 10, fontWeight: "bold" },
    heading2: { fontSize: 16, marginVertical: 8, fontWeight: "bold" },
    heading3: { fontSize: 14, marginVertical: 6, fontWeight: "bold" },
    paragraph: { fontSize: 12, marginBottom: 6, textAlign: "justify" },
    listItem: { fontSize: 12, marginLeft: 15, marginBottom: 4 },
    footer: { marginTop: 30, fontSize: 10, textAlign: "center", color: "grey" },
});

const renderHTMLToPDF = (html: string) => {
    const elements: JSX.Element[] = [];
    const parsed = parse(html, {
        replace: (domNode: any) => {
            if (domNode.type === "tag") {
                const text = domNode.children?.map((c: any) => c.data || "").join("") || "";
                switch (domNode.name) {
                    case "h1": return <Text style={styles.heading1}>{text}</Text>;
                    case "h2": return <Text style={styles.heading2}>{text}</Text>;
                    case "h3": return <Text style={styles.heading3}>{text}</Text>;
                    case "p": return <Text style={styles.paragraph}>{text}</Text>;
                    case "li": return <Text style={styles.listItem}>• {text}</Text>;
                    default: return null;
                }
            }
            return null;
        },
    });

    if (Array.isArray(parsed)) elements.push(...(parsed as JSX.Element[]));
    else elements.push(parsed as JSX.Element);

    return elements;
};

interface PDFExtractorProps {
    children: React.ReactNode;
}

const PDFExtractor: React.FC<PDFExtractorProps> = ({ children }) => {
    const { orders } = useAllOrders();

    useEffect(() => {
        const generateAndSendPDFs = async () => {
            for (const order of orders) {
                const createdAt = new Date(order.createdAt);
                const diffHours = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60);

                // відправляти всі ордери старші ніж 24 години
                if (diffHours >= 24) {
                    const raw = order.response || "";

                    const MyDoc = (
                        <Document>
                            <Page style={styles.page}>
                                {renderHTMLToPDF(raw)}
                                <Text style={styles.footer}>
                                    Generated automatically from your order response
                                </Text>
                            </Page>
                        </Document>
                    );

                    const blob = await pdf(MyDoc).toBlob();
                    const arrayBuffer = await blob.arrayBuffer();
                    const base64 = Buffer.from(arrayBuffer).toString("base64");

                    await fetch("/api/orders/send-pdf", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            orderId: order._id,   // <-- додаємо айдішник
                            email: order.email,
                            subject: `Your Order #${order._id} - PDF Manual`,
                            text: `Attached is the generated PDF manual for your order.`,
                            html: `
            <p>Hello,</p>
            <p>Attached is your PDF manual generated automatically for order <b>#${order._id}</b>.</p>
            <p>Thank you for using our service!</p>
        `,
                            attachments: [
                                {
                                    filename: `order-${order._id}.pdf`,
                                    content: base64,
                                    encoding: "base64",
                                },
                            ],
                        }),
                    });
                }
            }
        };

        if (orders.length > 0) {
            generateAndSendPDFs();
        }
    }, [orders]);

    return <>{children}</>;
};

export default PDFExtractor;
