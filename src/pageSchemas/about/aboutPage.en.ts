import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER, COMPANY_ADDRESS } from '@/resources/constants';

const schema: PageSchema = {
    meta: {
        title: `About Us — ${COMPANY_NAME}`,
        description: `Learn about ${COMPANY_NAME}, our mission, values, and the team behind the fastest QR code configurator. Discover our services, pricing, and how we make QR generation easy for everyone.`,
        keywords: ["about", "company", "team", "mission", "QR code", "services", "pricing"],
        canonical: "/about-us",
        ogImage: {
            title: `About ${COMPANY_NAME}`,
            description: "Meet the team and discover our mission for easy QR code generation.",
            bg: "#f4faff",
            color: "#0070f3",
        },
    },
    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Welcome to ${COMPANY_NAME}`,
            description: "Empowering everyone to create, customize, and use QR codes with ease. Fast, secure, and affordable for any need.",
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "See Our Services", link: "/services", color: "secondary" }
            ]
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Our Mission",
                description: `At ${COMPANY_NAME}, our mission is to make QR code generation accessible, reliable, and affordable for everyone. Whether you're a business, event organizer, or individual, we help you connect the world with a single scan.`,
                bullets: [
                    "Instant QR code creation",
                    "No subscriptions or hidden fees",
                    "Customizable for any use case",
                    "Trusted by thousands worldwide"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "flag",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Our Mission",
            }
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "2rem 0" },
            items: [
                {
                    key: "feature1",
                    block: {
                        type: "text",
                        description: "No technical skills required. Our platform is designed for everyone.",
                        bullets: [
                            "Intuitive interface",
                            "Step-by-step guidance",
                            "Instant preview"
                        ],
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false,
                    }
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description: "Choose colors, add logos, and set error correction for your brand.",
                        bullets: [
                            "Branding options",
                            "Flexible formats",
                            "Logo embedding"
                        ],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false,
                    }
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description: "Pay only for what you need. No subscriptions, tokens never expire.",
                        bullets: [
                            "Transparent pricing",
                            "Tokens for every QR",
                            "No recurring charges"
                        ],
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false,
                    }
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description: "Your data is protected. Every QR code is unique and safe.",
                        bullets: [
                            "Secure technology",
                            "Private codes",
                            "Trusted by professionals"
                        ],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff",
                        centerTitle: false,
                        centerDescription: false,
                        centerBullets: false,
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
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Our Team",
            },
            right: {
                type: "text",
                title: "Meet Our Team",
                description: "Our passionate team combines expertise in technology, design, and customer support to deliver the best QR code experience. We believe in innovation, transparency, and helping you succeed.",
                bullets: [
                    "Experienced developers",
                    "Creative designers",
                    "Dedicated support",
                    "Global vision"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "group",
                iconSize: 48,
                iconColor: "#28a745",
                iconBg: "#e6ffe6",
            }
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Our Values",
                description: "We are committed to simplicity, security, and customer satisfaction. Every feature is built with your needs in mind.",
                bullets: [
                    "Simplicity: Easy for everyone",
                    "Security: Your data is safe",
                    "Support: We're here for you",
                    "Innovation: Always improving"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "star",
                iconSize: 48,
                iconColor: "#FFD700",
                iconBg: "#fffbe6",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Our Values",
            }
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
                    price: "10",
                    tokens: 1000,
                    description: "Perfect for individuals who need occasional QR codes.",
                    features: [
                        "5 QR codes included",
                        "Instant QR access",
                        "No expiration",
                        "Best for one-time projects"
                    ],
                    buttonText: "Buy Now",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Pack",
                    price: "20",
                    tokens: 2000,
                    description: "Great for professionals and small teams.",
                    features: [
                        "20 QR codes included",
                        "Priority QR creation",
                        "Download & offline access",
                        "Best value for growing teams"
                    ],
                    buttonText: "Get Pro",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Enterprise Pack",
                    price: "40",
                    tokens: 4000,
                    description: "Best for businesses with regular QR needs.",
                    features: [
                        "50 QR codes included",
                        "Dedicated support",
                        "Multi-format downloads",
                        "Custom branding",
                        "Scalable for large teams"
                    ],
                    buttonText: "Go Premium",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom Pack",
                    price: "dynamic",
                    tokens: 0,
                    description: "Enter your own token amount and get instant pricing.",
                    features: [
                        "Flexible tokens",
                        "Automatic price calculation",
                        "No expiration",
                        "Perfect for custom needs"
                    ],
                    buttonText: "Buy Custom",
                    buttonLink: "/pricing",
                },
            ],
        },
        {
            type: "faq",
            items: [
                {
                    question: "What services do you offer?",
                    answer: "We provide instant QR code generation, customization, and secure downloads.",
                },
                {
                    question: "How do I get started?",
                    answer: "Visit our quick start guide for easy onboarding.",
                },
                {
                    question: "Where can I find pricing?",
                    answer: "All pricing options are detailed for your convenience.",
                },
                {
                    question: "How can I contact support?",
                    answer: `Reach us anytime via email: ${COMPANY_EMAIL}`,
                },
                {
                    question: "Is my data safe?",
                    answer: "Absolutely. We use secure technology to protect your information. Your QR codes are unique and private.",
                },
                {
                    question: "Do you have a refund policy?",
                    answer: "Yes, we offer a clear refund policy for unused tokens.",
                },
            ],
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Services",
                    description: "Explore all our QR code services.",
                    buttonLink: "/services",
                    buttonText: "See Services",
                },
                {
                    image: "image6",
                    title: "Pricing",
                    description: "Find the best plan for your needs.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing",
                },
                {
                    image: "image7",
                    title: "Get Started",
                    description: "Start generating QR codes now.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Contact & Legal",
                description: `Have questions or need help? Contact us at ${COMPANY_EMAIL}.  
${COMPANY_LEGAL_NAME}  
Company Number: ${COMPANY_NUMBER}  
Address: ${COMPANY_ADDRESS}`,
                bullets: [
                    "Email support available",
                    "Legal information on footer",
                    "More contact options below"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "email",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Contact & Legal",
            }
        },
    ],
};

export default schema;