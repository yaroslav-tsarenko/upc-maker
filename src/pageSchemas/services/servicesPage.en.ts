import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Our Services — ${COMPANY_NAME}`,
        description:
            `Explore ${COMPANY_NAME} services: from custom manuals tailored to your individual needs to a flexible token system, instant digital access, and trusted expertise across industries.`,
        keywords: [
            `${COMPANY_NAME} services`,
            "custom manuals",
            "manual specialists",
            "device guides",
            "equipment documentation",
            "token system",
            "digital manuals",
            "technical guides"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Services`,
            description:
                "Professional manuals for devices and equipment. Tailored, flexible, and token-based.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Custom Manuals for Your Needs",
                description:
                    `Every project, tool, and device is unique. That’s why ${COMPANY_NAME} creates manuals designed around your specific requirements. Whether you’re working with simple appliances, professional tools, or complex machinery, our experts deliver clear, structured, and accurate documentation.`,
                bullets: [
                    "Individually tailored guides",
                    "Specialist-created content",
                    "From home electronics to industrial machines",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Custom manuals service",
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image2",
                    title: "Quick Start Guides",
                    description: "Concise manuals to get your device running fast.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
                {
                    image: "image3",
                    title: "Step-by-Step Tutorials",
                    description:
                        "Detailed walkthroughs designed for both beginners and professionals.",
                    buttonLink: "/sign-up",
                    buttonText: "Unlock Now",
                },
                {
                    image: "image4",
                    title: "Maintenance Manuals",
                    description:
                        "Stay ahead with manuals that cover regular checks and preventive care.",
                    buttonLink: "/sign-up",
                    buttonText: "View Guides",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Token based access",
            },
            right: {
                type: "text",
                title: "Flexible Token System",
                description:
                    `Forget rigid subscriptions. With ${COMPANY_NAME}, you purchase tokens and spend them only on the manuals you actually need. The more manuals you unlock, the more tokens you use — simple, scalable, and transparent.`,
                bullets: [
                    "No monthly fees",
                    "Pay per manual you unlock",
                    "Scales with your usage",
                    "Perfect for individuals and enterprises",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Instant Access Anywhere",
                description:
                    `${COMPANY_NAME} manuals are available instantly after unlocking. Access them from your dashboard, download them for offline use, and keep your knowledge library organized. Your manuals, always at hand.`,
                bullets: [
                    "Immediate availability",
                    "Cloud-based and offline access",
                    "Download and re-access anytime",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Instant access",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Industry-Specific Manuals",
                    description:
                        "Tailored guides for healthcare, construction, IT, and manufacturing equipment.",
                    buttonLink: "/sign-up",
                    buttonText: "Learn More",
                },
                {
                    image: "image8",
                    title: "Multi-Language Documentation",
                    description:
                        "Access manuals in your preferred language for global teams and diverse users.",
                    buttonLink: "/sign-up",
                    buttonText: "Start Now",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Trusted by Professionals and Users",
                description:
                    `From engineers and technicians to everyday users, ${COMPANY_NAME} is the go-to source for reliable manuals. Our service blends professional accuracy with easy access for anyone who needs structured knowledge.`,
                bullets: [
                    "Relied upon across industries",
                    "Used by professionals and individuals",
                    "Backed by expert verification",
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
                    question: `What services does ${COMPANY_NAME} provide?`,
                    answer:
                        "We offer custom manuals, quick start guides, tutorials, and detailed documentation for devices and equipment across industries.",
                },
                {
                    question: "How does the token system work?",
                    answer:
                        "You purchase tokens and spend them on manuals. Each guide costs a certain number of tokens depending on its complexity. The more manuals you need, the more tokens you can purchase.",
                },
                {
                    question: "Can I use manuals offline?",
                    answer:
                        "Yes. Once unlocked, manuals can be downloaded and accessed anytime, even without an internet connection.",
                },
                {
                    question: "Do you provide manuals in multiple languages?",
                    answer:
                        `${COMPANY_NAME} supports multi-language documentation to meet the needs of global users.`,
                },
            ],
        },
    ],
};

export default schema;