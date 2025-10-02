import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Barcode Services — ${COMPANY_NAME}`,
        description: `Explore all-in-one barcode services with ${COMPANY_NAME}. Create, customize, and manage barcodes (UPC-A, EAN-13, Code128, Code39) with expert support and business-ready features.`,
        keywords: [
            `${COMPANY_NAME} barcode services`,
            "barcode generator",
            "UPC-A",
            "EAN-13",
            "Code128",
            "Code39",
            "bulk barcodes",
            "secure barcodes",
            "business barcode solutions"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Barcode Services`,
            description: "Generate and customize barcodes with powerful features for individuals and businesses.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },

    blocks: [
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Cloud-Based Barcode Management",
                description: "Create and save barcodes online. Access your codes anytime, from any device.",
                bullets: [
                    "Secure online storage",
                    "Download anytime",
                    "Organize your barcodes"
                ],
                iconName: "cloud",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Cloud barcode management"
            }
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            items: [
                {
                    key: "multiFormat",
                    block: {
                        type: "text",
                        title: "Multiple Formats Supported",
                        description: "Generate UPC-A, EAN-13, Code128, and Code39 barcodes for global standards.",
                        bullets: [
                            "GS1-compliant codes",
                            "Print-ready exports",
                            "Retail and logistics ready"
                        ],
                        iconName: "layers",
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6"
                    }
                },
                {
                    key: "security",
                    block: {
                        type: "text",
                        title: "Security & Privacy",
                        description: "Your barcodes and data are protected with enterprise-grade security.",
                        bullets: [
                            "Secure access",
                            "Data encryption",
                            "Verified accounts"
                        ],
                        iconName: "security",
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6"
                    }
                },
                {
                    key: "favorites",
                    block: {
                        type: "text",
                        title: "Favorites & Quick Access",
                        description: "Save and access your most-used barcodes instantly from your dashboard.",
                        bullets: [
                            "Mark favorite codes",
                            "Quick dashboard access",
                            "Personalized library"
                        ],
                        iconName: "favorite",
                        iconSize: 40,
                        iconColor: "#e91e63",
                        iconBg: "#ffe6f0"
                    }
                }
            ]
        },

        {
            type: "section",
            gap: "2rem",
            left: {
                type: "text",
                title: "Business Solutions",
                description: "Scale your barcode usage with business-ready features and custom support.",
                bullets: [
                    "Bulk barcode generation",
                    "Custom branding",
                    "Dedicated account manager"
                ],
                iconName: "business",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Business barcode solutions"
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
                        iconBg: "#e6f7ff"
                    }
                },
                {
                    key: "settings",
                    block: {
                        type: "text",
                        title: "Easy Customization",
                        description: "Adjust sizes, add human-readable text, and set options with an intuitive interface.",
                        bullets: [
                            "Color & style options",
                            "Logo integration",
                            "Flexible output formats"
                        ],
                        iconName: "settings",
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff"
                    }
                }
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
                alt: "Customer feedback"
            },
            right: {
                type: "text",
                title: "Customer Success Stories",
                description: `Thousands of users trust ${COMPANY_NAME} for reliable barcode generation. See how our services help businesses and individuals succeed.`,
                bullets: [
                    `"We created branded barcodes for our retail chain in minutes."`,
                    `"Our logistics team sped up dispatching with bulk barcodes."`,
                    `"Fast, reliable, and affordable — highly recommended."`
                ],
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6"
            }
        },

        {
            type: "faq",
            items: [
                {
                    question: "How do I generate barcodes?",
                    answer: "Go to Get Started, enter your data, select the barcode type, and download instantly."
                },
                {
                    question: "Are barcodes secure?",
                    answer: "Yes. All generated codes are private to your account and can include secure data."
                },
                {
                    question: "Do you support businesses?",
                    answer: "Absolutely! We offer bulk generation, custom branding, and enterprise features."
                },
                {
                    question: "Can I create multiple barcode formats?",
                    answer: "Yes, you can generate UPC-A, EAN-13, Code128, and Code39 barcodes as needed."
                },
                {
                    question: "Can I save favorite barcodes?",
                    answer: "Yes, you can mark your barcodes as favorites for quick access in your dashboard."
                }
            ]
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "See Pricing",
                    description: "Find the best plan for your barcode needs.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing"
                },
                {
                    image: "image6",
                    title: "Get Started",
                    description: "Start generating barcodes now with our easy-to-use platform.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started"
                },
                {
                    image: "image7",
                    title: "Contact Us",
                    description: "Need help? Our support team is ready to assist.",
                    buttonLink: "/contact-us",
                    buttonText: "Contact"
                }
            ]
        }
    ]
};

export default schema;
