import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `UPC Barcode FAQ — ${COMPANY_NAME}`,
        description: `Frequently Asked Questions about generating and downloading UPC barcodes using ${COMPANY_NAME}.`,
        keywords: [
            "faq",
            `${COMPANY_NAME} help`,
            "UPC barcode FAQ",
            "UPC barcode generator",
            "retail barcode",
            "barcode formats",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} UPC Barcode FAQ`,
            description: "Answers to the most common questions about UPC barcode generation and use.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a tool for generating UPC barcodes for retail and inventory purposes, supporting various output formats and use cases.`,
                },
                {
                    question: "What is a UPC barcode?",
                    answer: "A UPC (Universal Product Code) is a 12-digit barcode widely used in North America for product identification in retail stores.",
                },
                {
                    question: "How do I create a UPC barcode?",
                    answer: "Enter your 12-digit UPC number into the generator, choose your preferred size and format, and click 'Generate'. You can then preview and download your barcode.",
                },
                {
                    question: "Can I download barcodes?",
                    answer: "Yes. You can download your UPC barcode instantly in PNG, JPG, or SVG format, ready for print or digital use.",
                },
                {
                    question: "What formats are supported?",
                    answer: "We support standard barcode export formats like PNG, JPG, and SVG, suitable for printing, packaging, and digital workflows.",
                },
                {
                    question: "Are these barcodes GS1 compliant?",
                    answer: "Yes, as long as the input UPC number is valid and assigned by GS1, the generated barcode meets standard compliance requirements.",
                },
                {
                    question: "Can I generate multiple UPCs in bulk?",
                    answer: "Yes. With our bulk generation feature, you can upload a list of UPC numbers and receive a batch of barcodes for download.",
                },
                {
                    question: "Can I use the barcodes for selling on Amazon or in stores?",
                    answer: "Yes. As long as you have valid UPCs registered through GS1, our barcodes can be used for retail packaging, Amazon FBA, Shopify, Walmart, and more.",
                },
                {
                    question: "Do I need an account?",
                    answer: "No account is needed for generating single barcodes. However, signing up unlocks bulk generation, saved history, and advanced tools.",
                },
                {
                    question: "Is this service free?",
                    answer: "Basic UPC barcode generation is free. Bulk features and advanced exports may require a paid plan.",
                },
                {
                    question: "Are my barcodes stored or shared?",
                    answer: `${COMPANY_NAME} does not store or share your barcode data. All barcodes are generated locally and securely.`,
                },
                {
                    question: "Can I customize barcode size and margins?",
                    answer: "Yes. You can adjust the barcode size, quiet zone (margin), and resolution before exporting your barcode.",
                },
                {
                    question: "What devices are supported?",
                    answer: `${COMPANY_NAME} works smoothly on desktops, laptops, tablets, and smartphones across all major browsers.`,
                },
                {
                    question: "Do UPC barcodes expire?",
                    answer: "No. Once you generate and download a barcode for a valid UPC number, it can be used indefinitely on your product packaging.",
                },
                {
                    question: "Who can I contact for help?",
                    answer: `Our support team is available at ${COMPANY_EMAIL} to assist you with any issues related to barcode generation or formats.`,
                },
            ],
        },
    ],
};

export default faqSchema;
