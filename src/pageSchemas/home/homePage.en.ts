import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started with ${COMPANY_NAME} — UPC Barcode Generator`,
        description:
            "Start generating UPC barcodes in seconds. Fast setup, precise output, and export-ready formats for retail, logistics, and product labeling.",
        keywords: [
            "UPC barcode generator",
            "create barcodes",
            "GS1 barcodes",
            "bulk barcode generation",
            "barcode PNG SVG",
            "retail barcode tool",
            "barcode for packaging",
            "generate UPC code",
        ],
        canonical: "/get-started",
        ogImage: {
            title: "Generate UPC Barcodes Easily",
            description: "Retail-ready barcodes in just a few clicks. Export in high-res formats.",
            bg: "#fff6f0",
            color: "#ff6600",
        },
    },

    blocks: [
        {
            type: "qr-generator"
        },

        /* -------- HERO -------- */
        {
            type: "hero",
            bgImage: "image23",
            title: "Your Path to Perfect UPC Barcodes Starts Here",
            description:
                "Create compliant, retail-ready barcodes for packaging, inventory, and logistics — no special tools required.",
            buttons: [
                { text: "Generate UPC", link: "/get-started", color: "primary" },
                { text: "Help Center", link: "/faq", color: "secondary" },
            ],
        },

        /* -------- STEPS -------- */
        {
            type: "steps",
            title: "How It Works in 3 Easy Steps",
            items: [
                {
                    number: 1,
                    title: "Enter Your Code",
                    description: "Input your 12-digit UPC or generate sequential codes in bulk.",
                    iconName: "edit",
                },
                {
                    number: 2,
                    title: "Customize Output",
                    description:
                        "Select barcode size, resolution, and format. Customize margins and alignment.",
                    iconName: "palette",
                },
                {
                    number: 3,
                    title: "Download & Print",
                    description:
                        "Export as PNG, SVG, or PDF. Print or embed directly in your product labels.",
                    iconName: "download",
                },
            ],
        },

        /* -------- WHY CHOOSE -------- */
        {
            type: "section",
            align: "left",
            gap: "2rem",
            left: {
                type: "text",
                title: "Why Choose Our UPC Generator?",
                description:
                    "Designed for speed and accuracy, our tool supports batch generation, label-ready formatting, and all major barcode standards.",
                bullets: [
                    "No login required for basic usage",
                    "GS1-compliant formatting",
                    "Print-safe export options",
                ],
                iconName: "barcode",
                iconSize: 40,
                iconColor: "#ff6600",
                iconBg: "#fff3e6",
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image13",
                width: "100%",
                height: "400px",
                alt: "UPC Barcode Generation Interface",
            },
        },

        /* -------- FEATURE GRID -------- */
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image5",
                    title: "Bulk Barcode Creation",
                    description: "Generate dozens or hundreds of UPCs at once with consistent formatting.",
                    buttonLink: "/get-started",
                    buttonText: "Try Bulk Tool",
                },
                {
                    image: "image10",
                    title: "Flexible Output Settings",
                    description:
                        "Control margin, label text, alignment, and export DPI with precision.",
                    buttonLink: "/services",
                    buttonText: "See Options",
                },
                {
                    image: "image12",
                    title: "Retail-Ready Design",
                    description: "Compliant with industry requirements and ready for printing on packaging.",
                    buttonLink: "/pricing",
                    buttonText: "See Pricing",
                },
            ],
        },

        /* -------- PRICING BLOCK (ADDED) -------- */
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
                        buttonLink: "/pricing",
                    },
                    {
                        type: "pricing",
                        variant: "highlight",
                        title: "Professional Pack",
                        price: "25",
                        description: "For professionals and small teams.",
                        features: [
                            "Up to 500 barcodes",
                            "Advanced customization",
                            "High-resolution exports",
                            "Bulk-friendly"
                        ],
                        buttonText: "Get Pro",
                        buttonLink: "/pricing",
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
                        buttonLink: "/pricing",
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

        /* -------- TESTIMONIALS -------- */
        {
            type: "testimonials",
            title: "What Our Clients Say",
            items: [
                { name: "Anna", role: "E-commerce Seller", text: "I needed 200 barcodes for Amazon. This tool made it incredibly simple and fast.", avatar: "https://i.pravatar.cc/150?img=12" },
                { name: "Kevin", role: "Retail Manager", text: "We use this to generate barcodes for every new product line. Works perfectly.", avatar: "https://i.pravatar.cc/150?img=22" },
                { name: "Lisa", role: "Warehouse Lead", text: "Great export options! PNG and SVGs with perfect scaling.", avatar: "https://i.pravatar.cc/150?img=30" },
                { name: "Daniel", role: "Startup Founder", text: "Saved us hours — no need to hire a designer or buy expensive software.", avatar: "https://i.pravatar.cc/150?img=18" },
                { name: "Sara", role: "Labeling Technician", text: "Margins and print DPI options helped us avoid reprints. Great tool.", avatar: "https://i.pravatar.cc/150?img=25" },
                { name: "George", role: "Operations Director", text: "Used it across our packaging workflow. Everything looks clean and compliant.", avatar: "https://i.pravatar.cc/150?img=9" },
            ],
        },

        /* -------- FAQ -------- */
        {
            type: "faq",
            items: [
                {
                    question: "Is your generator GS1-compliant?",
                    answer: "Yes. Our UPC codes are rendered with correct height, width, and quiet zone requirements.",
                },
                {
                    question: "Can I generate barcodes in bulk?",
                    answer: "Yes! Use the bulk mode to create multiple barcodes at once with consistent layout.",
                },
                {
                    question: "What formats can I download?",
                    answer: "We support high-resolution PNG, SVG for vector use, and PDF for print-ready needs.",
                },
                {
                    question: "Do I need to sign up?",
                    answer: "No account is needed for most features. For saving history or batch exports, registration is helpful.",
                },
            ],
        },
    ],
};

export default schema;
