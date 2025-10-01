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
        title: `FAQ — ${COMPANY_NAME}`,
        description: `Frequently Asked Questions about ${COMPANY_NAME} QR code generator. Learn about customization, downloads, devices, security, and business features.`,
        keywords: [
            "faq",
            `${COMPANY_NAME} help`,
            "QR code FAQ",
            "QR code customization",
            "QR code downloads",
            "QR code business solutions"
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Answers to the most common questions about QR codes and services.`,
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
                    answer: `${COMPANY_NAME} is a platform that lets you generate, customize, and download QR codes instantly for personal, business, or enterprise use.`
                },
                {
                    question: "How do I generate a QR code?",
                    answer: "Simply enter your data (URL, text, contact info, etc.), customize the design, and click generate. Your QR code is ready instantly."
                },
                {
                    question: "Can I customize my QR codes?",
                    answer: "Yes. You can change colors, shapes, add logos or icons, adjust sizes, and choose output formats (PNG, SVG, PDF)."
                },
                {
                    question: "What can I use QR codes for?",
                    answer: "QR codes can be used for websites, product packaging, event tickets, marketing campaigns, menus, Wi-Fi access, business cards, and more."
                },
                {
                    question: "Is there a limit to how many QR codes I can create?",
                    answer: "No. You can generate unlimited QR codes. Some advanced customization features may be part of premium plans."
                },
                {
                    question: "Do I need an account?",
                    answer: "No account is required for basic QR generation. However, signing up allows you to save, manage, and favorite your QR codes."
                },
                {
                    question: "Can I download QR codes?",
                    answer: "Yes. QR codes can be downloaded instantly in multiple formats (PNG, SVG, PDF) and used both online and offline."
                },
                {
                    question: "Do my QR codes expire?",
                    answer: "No. Once generated and downloaded, your QR codes work permanently unless the linked content changes."
                },
                {
                    question: "Can I generate QR codes for free?",
                    answer: "Yes. Basic QR code generation is free. Premium customization options may be available for a small fee."
                },
                {
                    question: "Is my data secure?",
                    answer: `${COMPANY_NAME} follows industry-standard security practices to ensure that your generated QR codes and data are safe.`
                },
                {
                    question: "Can businesses use ${COMPANY_NAME}?",
                    answer: "Absolutely. We support bulk QR code generation, custom branding, analytics, and enterprise integrations."
                },
                {
                    question: "Is support available?",
                    answer: `Yes. Our support team is ready to help with customization, downloads, or business solutions. Contact us at ${COMPANY_EMAIL}.`
                },
                {
                    question: "What devices are supported?",
                    answer: `${COMPANY_NAME} works on all modern devices: desktop, laptop, tablet, and smartphone. Your QR codes are optimized for any screen size.`
                },
            ],
        },
    ],
};

export default faqSchema;
