import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "About ShipsterAI — Our Vision & Story",
        description:
            "Learn about ShipsterAI: our mission, our team, and how we power AI logistics in Sweden.",
        keywords: ["about", "logistics", "ai", "sweden"],
        canonical: "/about",
        ogImage: {
            title: "ShipsterAI",
            description: "AI-powered logistics for Sweden.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "About ShipsterAI",
                description:
                    "We build a modern, AI-driven logistics platform tailored to Sweden. Our focus is precision, transparency, and simplicity for both shippers and carriers.",
                bullets: [
                    "Founded in Sweden, Nordic focus",
                    "Data-driven decisions and smart matching",
                    "Scalable for businesses of all sizes",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image13",
                width: "100%",
                height: "420px",
                alt: "ShipsterAI team and culture",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image14",
                width: "100%",
                height: "420px",
                alt: "Innovation and technology",
            },
            right: {
                type: "text",
                title: "Our Mission",
                description:
                    "Make Nordic freight simple by matching the right load to the right carrier at the right time—using AI, real-time data, and clean UX.",
                bullets: [
                    "Less deadhead, fewer emissions",
                    "Right price in real time",
                    "Control and traceability for all parties",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "How We Work",
                description:
                    "We combine machine learning, resilient infrastructure, and close collaboration with the industry. Together with our partners, we optimize routes and capacity.",
                bullets: ["Swedish partnerships", "API-first architecture", "Rapid delivery of new features"],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image15",
                width: "100%",
                height: "420px",
                alt: "Partnerships and processes",
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image16",
                    title: "Our Values",
                    description: "Transparency, reliability, user-centric design.",
                    buttonLink: "/services",
                    buttonText: "Learn more",
                },
                {
                    image: "image17",
                    title: "Technology",
                    description: "AI models, route optimization, real-time analytics.",
                    buttonLink: "/services",
                    buttonText: "Learn more",
                },
                {
                    image: "image18",
                    title: "Sustainability",
                    description: "Cut deadhead and CO₂ via smart planning.",
                    buttonLink: "/services",
                    buttonText: "Learn more",
                },
                {
                    image: "image19",
                    title: "Support",
                    description: "Swedish-language support and onboarding.",
                    buttonLink: "/contact",
                    buttonText: "Contact us",
                },
            ],
        },
        {
            type: "text",
            title: "Team & Partners",
            description:
                "Our team blends engineers, logistics experts, and data scientists. We work closely with Swedish carriers and shippers.",
            centerTitle: true,
            centerDescription: true,
        },
        {
            type: "slider",
            images: ["image20", "image21", "image22", "image23"],
        },
        {
            type: "faq",
            items: [
                { question: "Where are you based?", answer: "We are based in Sweden with a Nordic focus." },
                { question: "Who can use the platform?", answer: "Carriers, shippers, and B2B customers across Sweden." },
                { question: "How do I get started?", answer: "Create an account and follow the onboarding steps." },
            ],
        },
    ],
};

export default schema;
