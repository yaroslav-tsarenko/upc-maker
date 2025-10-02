import { PageSchema } from '@/components/constructor/page-render/types';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER, COMPANY_ADDRESS } from '@/resources/constants';

const schema: PageSchema = {
    meta: {
        title: `About Us — ${COMPANY_NAME}`,
        description: `Discover ${COMPANY_NAME}: our mission, values, and the team behind the most accurate and secure barcode generator (UPC‑A, EAN‑13, Code128, Code39). Learn how we simplify barcoding for retail, packaging, and logistics.`,
        keywords: [
            "about",
            "company",
            "team",
            "mission",
            "barcode generator",
            "UPC-A",
            "EAN-13",
            "Code128",
            "Code39",
            "services",
            "pricing"
        ],
        canonical: "/about-us",
        ogImage: {
            title: `About ${COMPANY_NAME}`,
            description: "Meet the team and discover our mission to simplify barcode creation for everyone.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },

    blocks: [
        {
            type: "hero",
            bgImage: "image1",
            title: `Welcome to ${COMPANY_NAME}`,
            description: `We empower businesses and individuals to create precise and professional barcodes (UPC-A, EAN-13, Code128, Code39) for packaging, retail, and logistics. Fast, secure, and scalable for every need.`,
            buttons: [
                { text: "Get Started", link: "/get-started", color: "primary" },
                { text: "Our Services", link: "/services", color: "secondary" }
            ]
        },

        {
            type: "section",
            align: "center",
            gap: "2rem",
            left: {
                type: "text",
                title: "Our Mission",
                description: `${COMPANY_NAME} was created to make professional barcode generation accessible, reliable, and affordable. We combine advanced algorithms with a simple interface so anyone can produce GS1-compliant codes instantly.`,
                bullets: [
                    "UPC-A, EAN-13, Code128, Code39 in one tool",
                    "No subscriptions or hidden fees",
                    "High-resolution, print-ready output",
                    "Trusted by businesses worldwide"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                iconName: "flag",
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
                alt: "Our Mission"
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
                        description: "No technical skills required — our barcode platform is built for everyone.",
                        bullets: [
                            "Intuitive interface",
                            "Step-by-step guidance",
                            "Instant preview"
                        ],
                        iconSize: 40,
                        iconColor: "#28a745",
                        iconBg: "#e6ffe6"
                    }
                },
                {
                    key: "feature2",
                    block: {
                        type: "text",
                        description: "Match your packaging design with custom fonts, colors, and human-readable text.",
                        bullets: [
                            "Branding options",
                            "Flexible formats",
                            "Logo embedding"
                        ],
                        iconSize: 40,
                        iconColor: "#0070f3",
                        iconBg: "#e6f7ff"
                    }
                },
                {
                    key: "feature3",
                    block: {
                        type: "text",
                        description: "Pay only for what you need. No subscriptions, credits never expire.",
                        bullets: [
                            "Transparent pricing",
                            "Tokens for every barcode",
                            "No recurring charges"
                        ],
                        iconSize: 40,
                        iconColor: "#FFD700",
                        iconBg: "#fffbe6"
                    }
                },
                {
                    key: "feature4",
                    block: {
                        type: "text",
                        description: "Your data is protected. Every barcode is unique and secure.",
                        bullets: [
                            "Secure technology",
                            "Private codes",
                            "Trusted by professionals"
                        ],
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
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Our Team"
            },
            right: {
                type: "text",
                title: "Meet Our Team",
                description: `Our passionate team combines expertise in technology, design, and customer support to deliver the best barcode experience. We believe in innovation, transparency, and helping you succeed.`,
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
                iconBg: "#e6ffe6"
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
                iconBg: "#fffbe6"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Our Values"
            }
        },

        {
            type: "testimonials",
            title: "What Our Clients Say",
            items: [
                { name: "Marta", role: "Packaging Lead", text: "UPC-A and EAN-13 exports are spot-on. Print house loved the SVGs.", avatar: "https://i.pravatar.cc/150?img=5" },
                { name: "Arman", role: "Ops Manager", text: "Bulk barcodes saved hours before a logistics deadline.", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Li Wei", role: "Product Owner", text: "Code128 SKUs scan perfectly at POS — zero returns from retailers.", avatar: "https://i.pravatar.cc/150?img=8" },
                { name: "David", role: "E-commerce", text: "Fast to configure, predictable filenames, clean exports.", avatar: "https://i.pravatar.cc/150?img=22" }
            ]
        },

        {
            type: "faq",
            items: [
                {
                    question: "What services do you offer?",
                    answer: "We provide instant barcode generation, customization, and secure downloads."
                },
                {
                    question: "How do I get started?",
                    answer: "Visit our Get Started page for easy onboarding and step-by-step guidance."
                },
                {
                    question: "Where can I find pricing?",
                    answer: "All pricing options are detailed on our Pricing page for your convenience."
                },
                {
                    question: "How can I contact support?",
                    answer: `Reach us anytime via email: ${COMPANY_EMAIL}`
                },
                {
                    question: "Is my data safe?",
                    answer: "Absolutely. We use secure technology to protect your information. Your barcodes are unique and private."
                },
                {
                    question: "Do you have a refund policy?",
                    answer: "Yes, we offer a clear refund policy for unused credits."
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
                    title: "Our Services",
                    description: "Explore all our barcode services for businesses of any size.",
                    buttonLink: "/services",
                    buttonText: "See Services"
                },
                {
                    image: "image6",
                    title: "Pricing Plans",
                    description: "Find the best plan for your needs — no subscriptions, no hidden fees.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing"
                },
                {
                    image: "image7",
                    title: "Get Started",
                    description: "Start generating barcodes now with our easy-to-use platform.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started"
                }
            ]
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
                iconBg: "#e6f7ff"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Contact & Legal"
            }
        }
    ]
};

export default schema;
