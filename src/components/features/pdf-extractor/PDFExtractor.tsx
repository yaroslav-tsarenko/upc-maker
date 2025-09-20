"use client";

import React, { JSX, useEffect } from "react";
import { Document, Page, Text, StyleSheet, pdf } from "@react-pdf/renderer";
import parse from "html-react-parser";
import { marked } from "marked";
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

const renderHTMLToPDF = (markdown: string) => {
    const elements: JSX.Element[] = [];
    const html = marked.parse(markdown);

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

const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
};

interface PDFExtractorProps {
    children: React.ReactNode;
}

const PDFExtractor: React.FC<PDFExtractorProps> = ({ children }) => {
    const { orders } = useAllOrders();

    useEffect(() => {
        const generateAndSendPDF = async (order: AiOrder) => {
            if (!order.response || !order.email) return;

            const MyDoc = (
                <Document>
                    <Page style={styles.page}>
                        {renderHTMLToPDF(order.response)}
                        <Text style={styles.footer}>
                            Generated automatically from your order response
                        </Text>
                    </Page>
                </Document>
            );

            try {
                const blob = await pdf(MyDoc).toBlob();
                const arrayBuffer = await blob.arrayBuffer();
                const base64 = Buffer.from(arrayBuffer).toString("base64");

                await fetch("/api/orders/send-pdf", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        orderId: order._id,
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

                console.log(`✅ PDF sent for order ${order._id}`);
                setCookie(`pdf_sent_${order._id}`, "true");
            } catch (err) {
                console.error(`❌ PDF generation failed for order ${order._id}`, err);
            }
        };

        if (orders.length > 0) {
            const now = Date.now();

            const eligibleOrder = orders.find((order) => {
                if (!order.response || !order._id || !order.createdAt) return false;
                const alreadySent = getCookie(`pdf_sent_${order._id}`) === "true";
                if (alreadySent) return false;

                const created = new Date(order.createdAt).getTime();
                const diffMin = (now - created) / 1000 / 60;

                return diffMin <= 5;
            });

            if (eligibleOrder) {
                generateAndSendPDF(eligibleOrder);
            }
        }
    }, [orders]);

    return <>{children}</>;
};

export default PDFExtractor;
