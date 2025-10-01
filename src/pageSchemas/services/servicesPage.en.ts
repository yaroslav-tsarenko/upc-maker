import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `QR Code Services — ${COMPANY_NAME}`,
        description: `Discover all-in-one QR code services with ${COMPANY_NAME}. Create, customize, and manage QR codes with expert support and business-ready features.`,
        keywords: [
            `${COMPANY_NAME} services`,
            "QR code generator",
            "custom QR codes",
            "bulk QR codes",
            "secure QR codes",
            "multi-language QR",
            "business QR solutions"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} QR Services`,
            description: "Generate and customize QR codes with powerful features for individuals and businesses.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Welcome to ${COMPANY_NAME}`,
            description: "Your all-in-one solution for generating and customizing QR codes quickly and affordably.",
            buttons: [
                { text: "Generate QR Code", link: "/qr-generator", color: "primary" },
                { text: "See Pricing", link: "/pricing", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Cloud-Based QR Management",
                description: "Create and save QR codes online. Access your codes anytime, from any device.",
                bullets: [
                    "Secure online storage",
                    "Download anytime",
                    "Organize your codes"
                ],
                iconName: "cloud",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Cloud QR management",
            }
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "multiLang",
                    block: {
                        type: "text",
                        title: "Multi-Language Support",
                        description: "Generate QR codes with localized content in multiple languages.",
                        bullets: [
                            "Language selector",
                            "Localized QR data",
                            "Perfect for global teams"
                        ],
                        iconName: "language",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "security",
                    block: {
                        type: "text",
                        title: "Security & Privacy",
                        description: "Your QR codes and data are protected with enterprise-grade security.",
                        bullets: [
                            "Secure access",
                            "Data encryption",
                            "Verified accounts"
                        ],
                        iconName: "security",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "favorites",
                    block: {
                        type: "text",
                        title: "Favorites & Quick Access",
                        description: "Save and access your most-used QR codes instantly from your dashboard.",
                        bullets: [
                            "Mark favorite codes",
                            "Quick dashboard access",
                            "Personalized library"
                        ],
                        iconName: "favorite",
                        iconSize: 40,
                        iconColor: "#e91e63",
                        iconBg: "#ffe6f0",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Business Solutions",
                description: "Scale your QR code usage with business-ready features and custom support.",
                bullets: [
                    "Bulk QR code generation",
                    "Custom branding",
                    "Dedicated account manager"
                ],
                iconName: "business",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Business QR solutions",
            }
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            items: [
                {
                    key: "support",
                    block: {
                        type: "text",
                        title: "Expert Support",
                        description: "Our team helps you with setup, customization, and business integration.",
                        bullets: [
                            "Fast response times",
                            "Technical guidance",
                            "Personalized help"
                        ],
                        iconName: "help",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
                {
                    key: "settings",
                    block: {
                        type: "text",
                        title: "Easy Customization",
                        description: "Adjust colors, add logos, and set options with an intuitive interface.",
                        bullets: [
                            "Color & style options",
                            "Logo integration",
                            "Flexible output formats"
                        ],
                        iconName: "settings",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: true,
                    }
                },
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Customer feedback",
            },
            right: {
                type: "text",
                title: "Customer Success Stories",
                description: `Thousands of users trust ${COMPANY_NAME} for reliable QR code generation. See how our services help businesses and individuals succeed.`,
                bullets: [
                    `"I created branded QR codes for my café in minutes."`,
                    `"Our marketing team boosted engagement with custom QR campaigns."`,
                    `"Fast, reliable, and affordable — highly recommended."`
                ],
                centerTitle: false,
                centerDescription: false,
                centerBullets: false,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
            }
        },
        {
            type: "faq",
            items: [
                {
                    question: "How do I generate QR codes?",
                    answer: "Simply go to the QR Generator, enter your data, customize the design, and download instantly.",
                },
                {
                    question: "Are QR codes secure?",
                    answer: "Yes. All generated codes are private to your account and can include secure URLs.",
                },
                {
                    question: "Do you support businesses?",
                    answer: "Absolutely! We offer bulk generation, custom branding, and enterprise features.",
                },
                {
                    question: "Can I create multi-language QR codes?",
                    answer: "Yes, you can generate QR codes that link to localized content or use multilingual text.",
                },
                {
                    question: "Can I save favorite QR codes?",
                    answer: "Yes, you can mark your QR codes as favorites for quick access in your dashboard.",
                },
            ],
        },
    ],
};

export default schema;
