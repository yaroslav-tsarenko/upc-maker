import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "About Us — TechGuide",
        description:
            "Learn more about TechGuide. Our team of specialists has decades of experience in creating manuals for devices, equipment, and tools. Unlock expert knowledge with tokens.",
        keywords: [
            "about TechGuide",
            "manual specialists",
            "device manuals",
            "equipment guides",
            "technical documentation"
        ],
        canonical: "/about-us",
        ogImage: {
            title: "TechGuide",
            description:
                "Experienced specialists creating professional manuals for devices and equipment.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Experienced specialists writing manuals",
            },
            right: {
                type: "text",
                title: "Who We Are",
                description:
                    "TechGuide was founded with a simple mission: to make technical manuals more accessible, accurate, and reliable. Our specialists bring years of hands-on experience working with devices, equipment, and industrial tools, ensuring that every manual is crafted with precision and clarity.",
                bullets: [
                    "Manuals created by experienced professionals",
                    "Focus on accuracy and usability",
                    "Guides trusted by technicians and everyday users alike",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Our Expertise",
                description:
                    "From household appliances to complex machinery, our team has worked across industries to create detailed, easy-to-follow manuals. This expertise allows us to provide guides that are both technically accurate and user-friendly.",
                bullets: [
                    "Years of experience in technical documentation",
                    "Knowledge spanning multiple device categories",
                    "Commitment to clarity and detail in every manual",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Manual writing expertise",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image3",
                width: "100%",
                height: "400px",
                alt: "Token-based manual access",
            },
            right: {
                type: "text",
                title: "How TechGuide Works",
                description:
                    "With TechGuide, you can access any manual by using tokens. This system gives you flexibility and control — unlock only the guides you need, when you need them. Our goal is to make knowledge both accessible and cost-effective.",
                bullets: [
                    "Token-based access to manuals",
                    "Pay only for the guides you need",
                    "Instant digital availability",
                ],
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Why Trust TechGuide?",
                description:
                    "Because every guide is written and reviewed by seasoned specialists, you can be confident that the information you receive is accurate and reliable. We stand for quality, trust, and professional documentation.",
                bullets: [
                    "Specialists with proven experience",
                    "Transparent and reliable content",
                    "Guides designed for both professionals and everyday users",
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: "Who writes the manuals on TechGuide?",
                    answer:
                        "Our manuals are created by specialists with years of experience working with technical documentation and real devices.",
                },
                {
                    question: "What kind of manuals are available?",
                    answer:
                        "TechGuide offers manuals for a wide variety of devices, equipment, and tools, ranging from everyday appliances to advanced machinery.",
                },
                {
                    question: "Do I need a subscription?",
                    answer:
                        "No. TechGuide works on a token system, so you only pay for the manuals you need.",
                },
            ],
        },
    ],
};

export default schema;
