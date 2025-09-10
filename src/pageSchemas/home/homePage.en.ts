import { PageSchema } from "@/components/constructor/page-render/types";

const schema: PageSchema = {
    meta: {
        title: "ShipsterAI — AI Logistics for Sweden",
        description: "Next-gen AI logistics platform for carriers and shippers in Sweden.",
        keywords: ["logistics", "ai", "sweden"],
        canonical: "/",
        ogImage: {
            title: "ShipsterAI",
            description: "AI-powered logistics. Fast. Accurate. Automated.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "media",
            mediaType: "video",
            src: "video1",
            width: "100%",
            height: "500px",
            controls: false,
            loop: true,
            autoPlay: true,
            muted: true,
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image1", width: "100%", height: "400px", alt: "AI Logistics Platform" },
            right: {
                type: "text",
                title: "AI-Powered Logistics in Sweden",
                description:
                    "ShipsterAI is the next-generation AI logistics platform built for Sweden. It connects local carriers and customers with unmatched speed, accuracy, and automation.",
                bullets: [
                    "Instant AI-based load matching",
                    "Trusted by thousands of Swedish carriers",
                    "Optimized routes and real-time updates",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Why Choose ShipsterAI?",
                description:
                    "ShipsterAI combines machine learning, route prediction, and logistics intelligence to automate your supply chain. Get competitive pricing and a smaller carbon footprint with every shipment.",
                bullets: [
                    "AI route & pricing prediction",
                    "Supports LTL, FTL, Pallets",
                    "Fully digital logistics for the Swedish market",
                ],
            },
            right: { type: "media", mediaType: "image", src: "image2", width: "100%", height: "400px", alt: "AI Route Optimization" },
        },
        {
            type: "section",
            left: { type: "media", mediaType: "image", src: "image3", width: "100%", height: "400px", alt: "Carrier Dashboard" },
            right: {
                type: "text",
                title: "Powerful Dashboard for Swedish Carriers",
                description:
                    "Find relevant loads in seconds, avoid deadhead miles, and maximize fuel efficiency. ShipsterAI empowers Swedish drivers with intelligent decision-making tools.",
                bullets: ["Smart load recommendations", "Reduce fuel & maintenance costs", "Real-time support and status updates"],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Built for Sweden",
                description:
                    "Our system is tailored for Swedish infrastructure and regulations — with localization and local route knowledge built-in.",
                bullets: ["Swedish regulations ready", "Built-in localization", "Integrated with Nordic carriers"],
            },
            right: { type: "media", mediaType: "image", src: "image4", width: "100%", height: "400px", alt: "Built for Sweden" },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Ready to Ship with Intelligence?",
                description:
                    "Join the logistics revolution in Sweden with ShipsterAI. Whether you're a customer or a carrier, our AI tools give you the upper hand.",
                bullets: ["Instant onboarding", "AI load & route planning", "24/7 live tracking"],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                { image: "image5", title: "AI Logistics Platform", description: "Next-gen AI logistics for Sweden. Fast, accurate, automated.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image6", title: "Route Optimization", description: "AI-powered route prediction for cost & carbon savings.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image7", title: "Carrier Dashboard", description: "Empower Swedish carriers with smart load recommendations.", buttonLink: "/sign-up", buttonText: "Get Started" },
                { image: "image8", title: "Built for Sweden", description: "Tailored for Swedish regulations and local infrastructure.", buttonLink: "/sign-up", buttonText: "Get Started" },
            ],
        },
        {
            type: "text",
            title: "Powerful Dashboard for Swedish Carriers",
            description:
                "Find relevant loads in seconds, avoid deadhead miles, and maximize fuel efficiency. ShipsterAI empowers Swedish drivers with intelligent decision-making tools.",
            centerTitle: true,
            centerDescription: true,
        },
        {
            type: "slider",
            images: ["image9", "image10", "image11", "image12"],
        },
        {
            type: "faq",
            items: [
                { question: "What is ShipsterAI?", answer: "ShipsterAI is an AI-powered logistics platform for Sweden." },
                { question: "How do I sign up?", answer: "Click the “Get Started” button and follow the steps." },
                { question: "Is my data secure?", answer: "Yes, we use industry-standard security." },
            ],
        },
    ],
};

export default schema;
