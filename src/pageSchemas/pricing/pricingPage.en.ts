import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `Pricing — ${COMPANY_NAME}`,
        description:
            `Discover flexible, transparent pricing for ${COMPANY_NAME}. Generate and customize QR codes at affordable rates — no subscriptions, no hidden fees.`,
        keywords: [
            `${COMPANY_NAME} pricing`,
            "QR code generator pricing",
            "QR code customization cost",
            "affordable QR codes",
            "QR code business plans"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Pricing`,
            description: "Affordable, flexible pricing for QR code generation.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Simple Pricing for Every Need",
            description: `Choose the perfect plan for personal, professional, or business QR code generation. Pay only for what you use — no recurring fees.`,
            buttons: [
                { text: "Get Started", link: "/qr-generator", color: "primary" },
                { text: "Contact Sales", link: "/contact", color: "secondary" },
            ],
        },
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Why Choose Our Pricing?",
                description:
                    `We keep things simple: no subscriptions, no hidden fees. Whether you need a single QR code or thousands for your business, ${COMPANY_NAME} adapts to your needs.`,
                bullets: [
                    "No subscriptions or recurring payments",
                    "Pay-as-you-go flexibility",
                    "Affordable for individuals and enterprises",
                    "Bulk QR generation available"
                ],
                iconName: "qr_code",
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
            columns: 4,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter Pack",
                    price: "5",
                    description: "For individuals who need a few QR codes.",
                    features: [
                        "Up to 10 QR codes",
                        "Basic customization",
                        "Download in PNG/JPG",
                        "No expiration"
                    ],
                    buttonText: "Buy Now",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Pack",
                    price: "15",
                    description: "For professionals and small teams.",
                    features: [
                        "Up to 50 QR codes",
                        "Advanced customization (colors, logos)",
                        "High-resolution exports",
                        "Best value for growing teams"
                    ],
                    buttonText: "Get Pro",
                    buttonLink: "/checkout?plan=pro",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Business Pack",
                    price: "30",
                    description: "For businesses with ongoing QR needs.",
                    features: [
                        "Unlimited QR codes",
                        "Full customization",
                        "Priority support",
                        "Bulk download/export"
                    ],
                    buttonText: "Go Business",
                    buttonLink: "/checkout?plan=business",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom Pack",
                    price: "dynamic",
                    description: "Define your own package and get instant pricing.",
                    features: [
                        "Flexible number of QR codes",
                        "Custom features",
                        "No expiration",
                        "Perfect for enterprises"
                    ],
                    buttonText: "Contact Us",
                    buttonLink: "/contact",
                },
            ],
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "How pricing works",
            },
            right: {
                type: "text",
                title: "How Our Pricing Works",
                description:
                    `You only pay for the QR codes you generate. Higher plans unlock more features and customization options. Your QR codes never expire, and you can download them anytime.`,
                bullets: [
                    "Basic QR codes included in all plans",
                    "Advanced features available in Pro/Business",
                    "No hidden costs",
                    "Transparent pay-as-you-go model",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "What Our Customers Say",
                description:
                    `Thousands of users trust ${COMPANY_NAME} for QR code generation. Our simple and affordable pricing works for freelancers, teams, and enterprises.`,
                bullets: [
                    `"Perfect for my restaurant menu QR codes — affordable and easy."`,
                    `"Our marketing team uses ${COMPANY_NAME} for campaigns."`,
                    `"Best QR code generator with real customization."`,
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
                    question: "Do QR codes expire?",
                    answer: "No. Once generated and downloaded, your QR codes will always work.",
                },
                {
                    question: "Can I upgrade my plan later?",
                    answer: "Yes. You can upgrade at any time for more features and unlimited QR generation.",
                },
                {
                    question: "What formats are available?",
                    answer: "QR codes can be downloaded in PNG, JPG, SVG, or PDF depending on your plan.",
                },
                {
                    question: "Do you offer refunds?",
                    answer: "Refunds are available within 14 days for unused plans under our policy.",
                },
                {
                    question: "Is support available?",
                    answer: `Yes. We provide support for all plans. Email us at ${COMPANY_EMAIL} for assistance.`,
                },
            ],
        },
    ],
};

export default pricingSchema;
