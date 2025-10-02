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
        description: `Discover flexible, transparent pricing for ${COMPANY_NAME}. Generate and customize barcodes at affordable rates — no subscriptions, no hidden fees.`,
        keywords: [
            `${COMPANY_NAME} pricing`,
            "barcode generator pricing",
            "UPC-A pricing",
            "EAN-13 pricing",
            "Code128",
            "Code39",
            "bulk barcode plans"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Pricing`,
            description: "Affordable, flexible pricing for barcode generation.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },

    blocks: [
        {
            type: "hero",
            bgImage: "image10",
            title: "Transparent Pricing for Professional Barcodes",
            description: `Choose the perfect plan for personal, professional, or business barcode generation. Pay only for what you use — no recurring fees.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "Contact Us", link: "/contact-us", color: "secondary" },
            ],
        },

        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Fair and Flexible Plans",
                description: `We keep things simple: no subscriptions, no hidden fees. Whether you need a single barcode or thousands for your business, ${COMPANY_NAME} adapts to your needs.`,
                bullets: [
                    "No subscriptions or recurring payments",
                    "Pay-as-you-go flexibility",
                    "Affordable for individuals and enterprises",
                    "Bulk barcode generation available"
                ],
                iconName: "layers",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Barcode pricing overview",
            },
        },

        // комбінований блок: текст + таблиця тарифів
        {
            type: "section",
            align: "center",
            gap: "3rem",
            right: {
                type: "grid",
                columns: 4,
                gap: "2rem",
                cards: [
                    {
                        type: "pricing",
                        variant: "basic",
                        title: "Starter Pack",
                        price: "10",
                        description: "For individuals who need a few barcodes.",
                        features: [
                            "Up to 50 barcodes",
                            "Standard customization",
                            "Download in PNG/JPG",
                            "No expiration"
                        ],
                        buttonText: "Buy Now",
                        buttonLink: "/contact-us",
                    },
                    {
                        type: "pricing",
                        variant: "highlight",
                        title: "Professional Pack",
                        price: "25",
                        description: "For professionals and small teams.",
                        features: [
                            "Up to 500 barcodes",
                            "Advanced customization (colors, human-readable text)",
                            "High-resolution exports",
                            "Bulk-friendly"
                        ],
                        buttonText: "Get Pro",
                        buttonLink: "/contact-us",
                    },
                    {
                        type: "pricing",
                        variant: "premium",
                        title: "Business Pack",
                        price: "50",
                        description: "For businesses with ongoing barcode needs.",
                        features: [
                            "Unlimited barcodes",
                            "Full customization",
                            "Priority support",
                            "Batch export"
                        ],
                        buttonText: "Go Business",
                        buttonLink: "/contact-us",
                    },
                    {
                        type: "pricing",
                        variant: "basic",
                        title: "Custom Pack",
                        price: "dynamic",
                        description: "Define your own package and get instant pricing.",
                        features: [
                            "Flexible number of barcodes",
                            "Custom features",
                            "No expiration",
                            "Perfect for enterprises"
                        ],
                        buttonText: "Contact Us",
                        buttonLink: "/contact-us",
                    },
                ],
            },
        },

        // комбінований блок: як працює тарифікація + приклади
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "How Our Pricing Works",
                description: `You only pay for the barcodes you generate. Higher plans unlock more features and customization options. Your barcodes never expire, and you can download them anytime.`,
                bullets: [
                    "All barcode formats included in all plans",
                    "Advanced features available in Pro/Business",
                    "No hidden costs",
                    "Transparent pay-as-you-go model",
                ],
                iconName: "settings",
                iconSize: 40,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "How barcode pricing works",
            },
        },

        // комбінований блок: відгуки
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "What Our Customers Say",
                description: `Thousands of users trust ${COMPANY_NAME} for barcode generation. Our simple and affordable pricing works for freelancers, teams, and enterprises.`,
                bullets: [
                    `"Perfect for my product barcodes — affordable and easy."`,
                    `"Our logistics team uses ${COMPANY_NAME} for shipment labeling."`,
                    `"Best barcode generator with real customization."`,
                ],
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Customer testimonials",
            },
        },

        {
            type: "faq",
            items: [
                {
                    question: "Do barcodes expire?",
                    answer: "No. Once generated and downloaded, your barcodes will always work.",
                },
                {
                    question: "Can I upgrade my plan later?",
                    answer: "Yes. You can upgrade at any time for more features and unlimited barcode generation.",
                },
                {
                    question: "What formats are available?",
                    answer: "Barcodes can be downloaded in PNG, JPG, SVG, or PDF depending on your plan.",
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
