import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started with ${COMPANY_NAME} — Professional Barcode Generator`,
        description:
            `Start creating high-quality barcodes (UPC-A, EAN-13, Code128, Code39) today. Fast setup, customizable formats, and print-ready exports for packaging, retail and logistics.`,
        keywords: [
            "barcode generator",
            "UPC-A",
            "EAN-13",
            "Code128",
            "Code39",
            "retail barcode",
            "print-ready barcodes",
            "packaging labels",
            "SKU barcodes",
            "logistics barcodes"
        ],
        canonical: "/get-started",
        ogImage: {
            title: "Get Started with Barcode Generator",
            description: "Create and download professional barcodes quickly with flexible design options.",
            bg: "#f4faff",
            color: "#0070f3"
        }
    },

    blocks: [

        // HERO — кнопки виправлені
        {
            type: "hero",
            bgImage: "image11",
            title: "Start Creating Professional Barcodes Today",
            description:
                "Generate UPC-A, EAN-13, Code128 and Code39 barcodes for packaging, retail, and logistics. No design or coding skills required.",
            buttons: [
                { text: "See Services", link: "/services", color: "primary" },
                { text: "Help Center", link: "/faq", color: "secondary" }
            ]
        },

        {
            type: "steps",
            title: "How to Get Started in 3 Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Select Barcode Type",
                    description: "Choose UPC-A, EAN-13, Code128 or Code39 for your product or SKU.",
                    iconName: "edit"
                },
                {
                    number: 2,
                    title: "Customize & Preview",
                    description: "Set size, DPI, human-readable text, colors, and preview instantly.",
                    iconName: "palette"
                },
                {
                    number: 3,
                    title: "Download & Use",
                    description: "Export barcodes in PNG, SVG or PDF and apply to packaging or labels.",
                    iconName: "download"
                }
            ]
        },

        {
            type: "section",
            align: "left",
            gap: "2rem",
            left: {
                type: "text",
                title: "Why Choose Our Barcode Generator?",
                description:
                    "We make barcode creation simple, accurate, and fast. Ideal for businesses, designers, and logistics teams.",
                bullets: [
                    "Automatic check-digit validation",
                    "GS1-compliant output",
                    "High-resolution, print-ready exports"
                ],
                iconName: "star",
                iconSize: 40,
                iconColor: "#FFD700",
                iconBg: "#fffbe6"
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image12",
                width: "100%",
                height: "400px",
                alt: "Professional barcode generation preview"
            }
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Enterprise-Grade Accuracy",
                    description:
                        "Correct check-digit math for UPC-A & EAN-13, compact Code128 for SKUs, and crystal-clear Code39.",
                    buttonLink: "/services",
                    buttonText: "See Services"
                },
                {
                    image: "image6",
                    title: "Brand Consistency",
                    description:
                        "Customize fonts, human-readable text, and colors to match your packaging design.",
                    buttonLink: "/faq",
                    buttonText: "Learn More"
                },
                {
                    image: "image7",
                    title: "Print-Ready Output",
                    description:
                        "Export PNG, SVG, PDF at up to 600 DPI for razor-sharp packaging and digital use.",
                    buttonLink: "/pricing",
                    buttonText: "View Pricing"
                }
            ]
        },

        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image8",
                width: "100%",
                height: "400px",
                alt: "Bulk barcode export preview"
            },
            right: {
                type: "text",
                title: "Bulk Generation for Businesses",
                description:
                    "Upload SKU lists to create multiple barcodes at once — perfect for warehouses, e-commerce, and packaging runs.",
                bullets: [
                    "Batch PNG export",
                    "Predictable file naming",
                    "Error-free at scale"
                ],
                iconName: "time",
                iconSize: 40,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff"
            }
        },

        {
            type: "testimonials",
            title: "What Our Clients Say",
            items: [
                {
                    name: "Marta",
                    role: "Packaging Lead",
                    text: "UPC-A and EAN-13 exports are spot-on. Print house loved the SVGs.",
                    avatar: "https://i.pravatar.cc/150?img=5"
                },
                {
                    name: "Arman",
                    role: "Ops Manager",
                    text: "Bulk barcodes saved hours before a logistics deadline.",
                    avatar: "https://i.pravatar.cc/150?img=12"
                },
                {
                    name: "Li Wei",
                    role: "Product Owner",
                    text: "Code128 SKUs scan perfectly at POS — zero returns from retailers.",
                    avatar: "https://i.pravatar.cc/150?img=8"
                },
                {
                    name: "David",
                    role: "E-commerce",
                    text: "Fast to configure, predictable filenames, clean exports.",
                    avatar: "https://i.pravatar.cc/150?img=22"
                },
                {
                    name: "Sofia",
                    role: "Brand Designer",
                    text: "Barcode styling matched our brand perfectly. Great support too!",
                    avatar: "https://i.pravatar.cc/150?img=39"
                },
                {
                    name: "Nur",
                    role: "Marketing",
                    text: "Bulk generation and DPI control made campaign rollouts easy.",
                    avatar: "https://i.pravatar.cc/150?img=16"
                }
            ]
        },

        {
            type: "faq",
            items: [
                {
                    question: "Do I need an account to generate barcodes?",
                    answer: "No, basic features are available without an account. Sign up for bulk tools and history."
                },
                {
                    question: "What formats are available for download?",
                    answer: "We support PNG, SVG, and PDF — perfect for digital or print usage."
                },
                {
                    question: "How much does it cost?",
                    answer: "We offer flexible plans. Visit the pricing page to find the right fit for you."
                },
                {
                    question: "What if I need help or a custom barcode format?",
                    answer: `You can always reach out at ${COMPANY_EMAIL} — we're happy to assist!`
                }
            ]
        },

        // CTA блок — кнопки виправлені
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Ready to Generate Barcodes?",
                description:
                    "No long setup. No learning curve. Just fast, reliable, and professional barcodes in seconds.",
                bullets: [
                    "Trusted by small teams and enterprises",
                    "Privacy-focused and ad-free",
                    "Instant feedback and download"
                ],
                iconName: "verified",
                iconSize: 48,
                iconColor: "#0070f3",
                iconBg: "#e6f7ff",
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
                buttons: [
                    { text: "Get Started", link: "/sign-in", color: "primary" },
                    { text: "Contact Us", link: "/contact-us", color: "secondary" }
                ]
            }
        }
    ]
};

export default schema;
