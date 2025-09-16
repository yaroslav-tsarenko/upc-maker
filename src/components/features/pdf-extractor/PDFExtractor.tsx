"use client";

import React, {JSX, useEffect} from "react";
import { Document, Page, Text, StyleSheet, pdf } from "@react-pdf/renderer";
import parse from "html-react-parser";
import { AiOrder } from "@/context/AllOrdersContext";

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: "Helvetica",
        lineHeight: 1.5,
        flexDirection: "column",
    },
    coverPage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    coverTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
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
                    case "h1":
                        return <Text style={styles.heading1}>{text}</Text>;
                    case "h2":
                        return <Text style={styles.heading2}>{text}</Text>;
                    case "h3":
                        return <Text style={styles.heading3}>{text}</Text>;
                    case "p":
                        return <Text style={styles.paragraph}>{text}</Text>;
                    case "li":
                        return <Text style={styles.listItem}>• {text}</Text>;
                    default:
                        return null;
                }
            }
            return null;
        },
    });

    if (Array.isArray(parsed)) elements.push(...parsed as JSX.Element[]);
    else elements.push(parsed as JSX.Element);

    return elements;
};

interface PDFExtractorProps {
    orders: AiOrder[];
    children: React.ReactNode;
}

const PDFExtractor: React.FC<PDFExtractorProps> = ({ orders, children }) => {
    useEffect(() => {
        const generatePDFs = async () => {
            for (const order of orders) {
                const createdAt = new Date(order.createdAt);
                const diffMinutes = (Date.now() - createdAt.getTime()) / (1000 * 60);

                if (diffMinutes >= 1) {
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
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `order-${order._id}.pdf`;
                    link.click();
                    URL.revokeObjectURL(url);
                }
            }
        };

        if (orders.length > 0) {
            generatePDFs();
        }
    }, [orders]);

    return <>{children}</>;
};

export default PDFExtractor;
