import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `About ${COMPANY_NAME} — Our Story & Values`,
        description: `Discover the mission, team, and expertise behind ${COMPANY_NAME}. Learn how our specialists deliver trusted manuals and support.`,
        keywords: [
            `about ${COMPANY_NAME}`,
            "company values",
            "expert team",
            "manuals",
            "contact"
        ],
        canonical: "/about-us",
        ogImage: {
            title: COMPANY_NAME,
            description: `Meet the team and vision behind ${COMPANY_NAME}.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "slider",
            images: ["image1", "image2", "image3"],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Welcome to ${COMPANY_NAME}`,
                description: `${COMPANY_NAME} is operated by ${COMPANY_LEGAL_NAME} (Company No: ${COMPANY_NUMBER}). Our mission is to empower users with reliable, expert-created manuals for every need.`,
                bullets: [
                    "Driven by innovation and expertise",
                    "Trusted by thousands of users",
                    "Accessible knowledge for all"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Company mission",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Teamwork",
            },
            right: {
                type: "text",
                title: "Our Team",
                description: "A diverse group of specialists, writers, and engineers dedicated to quality documentation. We believe in collaboration and continuous learning.",
                bullets: [
                    "Experienced professionals",
                    "Continuous training",
                    "Passion for technology"
                ],
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image3",
                    title: "Our Values",
                    description: "Integrity, clarity, and user empowerment are at the heart of everything we do.",
                    buttonLink: "/about-us",
                    buttonText: "About",
                },
                {
                    image: "image4",
                    title: "Our Services",
                    description: "We provide a wide range of technical manuals and guides for various industries.",
                    buttonLink: "/services",
                    buttonText: "Services",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Why Choose Us?",
                description: "We combine years of experience with a passion for helping users. Our manuals are trusted by professionals and everyday users alike.",
                bullets: [
                    "Comprehensive documentation",
                    "User-friendly guides",
                    "Support for all your needs"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Why choose us",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Pricing and plans",
            },
            right: {
                type: "text",
                title: "Transparent Pricing",
                description: "Our pricing is simple and fair. Pay only for what you need, when you need it.",
                bullets: [
                    "No hidden fees",
                    "Flexible plans",
                    "See our pricing page for details"
                ],
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image7",
                    title: "FAQ",
                    description: "Find answers to common questions about our platform and services.",
                    buttonLink: "/faq",
                    buttonText: "FAQ",
                },
                {
                    image: "image8",
                    title: "Get Started",
                    description: "Ready to begin? Start using our manuals and guides today.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Contact & Support",
                description: `Have questions? Reach out to us at ${COMPANY_EMAIL} or visit us at ${COMPANY_ADDRESS}. Our support team is ready to help you.`,
                bullets: [
                    "Responsive customer service",
                    "Comprehensive FAQ and help center",
                    "Direct email support"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image9",
                width: "100%",
                height: "400px",
                alt: "Contact and support",
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a platform providing expert manuals and guides, operated by ${COMPANY_LEGAL_NAME}.`,
                },
                {
                    question: "How can I contact support?",
                    answer: `You can email us at ${COMPANY_EMAIL} or use our contact form.`,
                },
                {
                    question: "Where is the company located?",
                    answer: `Our address: ${COMPANY_ADDRESS}`,
                },
                {
                    question: "Where can I find your pricing?",
                    answer: `Visit our pricing page at /pricing for all details.`,
                },
                {
                    question: "How do I get started?",
                    answer: `Go to /get-started to begin using our services.`,
                },
            ],
        },
    ],
};

export default schema;
