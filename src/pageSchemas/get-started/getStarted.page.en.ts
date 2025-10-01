import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR Code Generator — ${COMPANY_NAME}`,
        description: `Generate QR codes easily, quickly, and affordably for any need. Customize your QR codes and access them instantly on any device.`,
        keywords: [
            "QR code generator",
            "custom QR codes",
            "affordable QR codes",
            "instant QR code creation",
            "multi-device QR codes",
            "easy QR code customization"
        ],
        canonical: "/qr-generator",
        ogImage: {
            title: `QR Code Generator`,
            description: "Create and customize QR codes instantly.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Generate QR Codes Instantly",
            description: "Create, customize, and download QR codes for any purpose — fast, easy, and affordable.",
            buttons: [
                { text: "Try QR Generator", link: "/qr-generator", color: "primary" },
                { text: "Learn More", link: "/faq", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Why Use Our QR Code Generator?",
                description: "Our platform lets you create QR codes for business, events, marketing, or personal use. No technical skills required — just enter your data and get your code.",
                bullets: [
                    "Instant QR code creation",
                    "Easy customization options",
                    "Affordable pricing",
                    "Works on all devices",
                ],
                iconName: "qr",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "Step 1 — Enter Your Data",
                    description: "Type in a URL, text, contact info, or any data you want to encode.",
                    buttonLink: "/qr-generator",
                    buttonText: "Start Now",
                },
                {
                    image: "image2",
                    title: "Step 2 — Customize Your QR Code",
                    description: "Choose colors, add a logo, and set the size to match your brand or style.",
                    buttonLink: "/qr-generator",
                    buttonText: "Customize",
                },
                {
                    image: "image3",
                    title: "Step 3 — Download & Share",
                    description: "Download your QR code in high quality and use it anywhere — print, web, or mobile.",
                    buttonLink: "/qr-generator",
                    buttonText: "Download",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "QR code customization preview",
            },
            right: {
                type: "text",
                title: "Customize Your QR Codes",
                description: "Easily change colors, add your logo, and select the format you need. Make your QR codes stand out and match your brand.",
                bullets: [
                    "Color and style options",
                    "Logo upload",
                    "Multiple formats: PNG, SVG, PDF",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Affordable and Flexible",
                description: "Generate unlimited QR codes at a low cost. No subscriptions — pay only for what you use.",
                bullets: [
                    "No hidden fees",
                    "Pay-as-you-go model",
                    "Bulk generation for businesses",
                ],
                iconName: "money",
                iconSize: 40,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Affordable QR code pricing",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Multi-Device Support",
                    description: "Generate and use QR codes on desktop, tablet, or smartphone. Our site adapts to your workflow.",
                    buttonLink: "/faq",
                    buttonText: "Learn More",
                },
                {
                    image: "image7",
                    title: "Offline Access",
                    description: "Download QR codes for offline use. Perfect for print materials and events.",
                    buttonLink: "/faq",
                    buttonText: "Read FAQ",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "What Makes Us Different?",
                description: "We focus on speed, simplicity, and affordability. Generate as many QR codes as you need, with full customization and instant access.",
                bullets: [
                    "Fast and reliable",
                    "Easy to use for everyone",
                    "Custom branding options",
                    "No subscription required",
                ],
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: "How do I generate a QR code?",
                    answer: "Just enter your data, customize the style, and click generate. Your QR code is ready instantly.",
                },
                {
                    question: "Can I customize the QR code?",
                    answer: "Yes. You can change colors, add a logo, and select the format you want.",
                },
                {
                    question: "Is there a limit to how many QR codes I can create?",
                    answer: "No. You can generate as many QR codes as you need.",
                },
                {
                    question: "Do I need an account?",
                    answer: "No account required for basic generation. Sign up for advanced features and history.",
                },
                {
                    question: "Can I use QR codes for business?",
                    answer: "Absolutely. Our platform supports bulk generation and branding for business needs.",
                },
                {
                    question: "Is support available?",
                    answer: `Yes. Contact us at ${COMPANY_EMAIL} for help or custom requests.`,
                },
            ],
        },
        {
            type: "qr-generator",
        },
    ],
};

export default schema;