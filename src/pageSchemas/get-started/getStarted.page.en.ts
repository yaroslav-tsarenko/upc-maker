import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — ${COMPANY_NAME}`,
        description:
            `Learn how to get started with ${COMPANY_NAME}: create an account, purchase tokens, and unlock manuals instantly. Follow simple steps to access expert documentation.`,
        keywords: [
            `${COMPANY_NAME} get started`,
            `how to use ${COMPANY_NAME}`,
            "manuals access",
            "unlock guides",
            "purchase tokens",
            "documentation steps"
        ],
        canonical: "/get-started",
        ogImage: {
            title: `Get Started with ${COMPANY_NAME}`,
            description:
                `Follow simple steps to create your account, buy tokens, and unlock manuals instantly.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: `Start Your Journey with ${COMPANY_NAME}`,
                description:
                    `Getting started is simple. In just a few steps, you can create your account, buy tokens, and access professional manuals tailored to your needs. Follow the guide below to unlock your first manual.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "Step 1 — Create an Account",
                    description:
                        `Sign up with your email to access your dashboard, manage tokens, and store your manuals securely.`,
                    buttonLink: "/sign-up",
                    buttonText: "Sign Up",
                },
                {
                    image: "image2",
                    title: "Step 2 — Buy Tokens",
                    description:
                        `Purchase tokens based on your needs. Tokens give you flexible access to manuals without subscription pressure.`,
                    buttonLink: "/pricing",
                    buttonText: "View Pricing",
                },
                {
                    image: "image3",
                    title: "Step 3 — Unlock Manuals",
                    description:
                        `Use tokens to unlock the manuals you need. Instantly access them online, download, and save for future use.`,
                    buttonLink: "/services",
                    buttonText: "Browse Manuals",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Dashboard preview",
            },
            right: {
                type: "text",
                title: `Manage Everything in One Dashboard`,
                description:
                    `Your ${COMPANY_NAME} dashboard is the control center for your knowledge. Check your token balance, view your unlocked manuals, and track your download history — all in one place.`,
                bullets: [
                    "Track tokens and usage history",
                    "Browse manuals by category",
                    "Revisit and download unlocked guides anytime",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Scale Your Access with Token Packages`,
                description:
                    `Whether you need a single manual or an entire library, ${COMPANY_NAME} adapts to your needs. Purchase more tokens to unlock additional manuals and grow your personal documentation hub.`,
                bullets: [
                    "Small packages for individuals",
                    "Bulk tokens for businesses",
                    "Transparent, cost-effective pricing",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Token packages",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Multi-Device Access",
                    description:
                        `Use your manuals on desktop, tablet, or smartphone. ${COMPANY_NAME} adapts to your workflow.`,
                    buttonLink: "/faq",
                    buttonText: "Learn More",
                },
                {
                    image: "image7",
                    title: "Offline Availability",
                    description:
                        `Download manuals to access them anytime, even without an internet connection.`,
                    buttonLink: "/faq",
                    buttonText: "Read FAQ",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `Why Start with ${COMPANY_NAME}?`,
                description:
                    `Because we make technical knowledge easy, flexible, and accessible. From the first token you spend to the last manual you unlock, our system is designed to give you control and confidence.`,
                bullets: [
                    "Quick and easy onboarding",
                    "Token-based flexibility",
                    "Expert-created manuals",
                    "Knowledge available 24/7",
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
                    question: "How long does it take to get started?",
                    answer:
                        "Just a few minutes. Create an account, buy tokens, and start unlocking manuals right away.",
                },
                {
                    question: "Do tokens expire?",
                    answer:
                        "No. Tokens stay in your account until you use them, giving you full flexibility.",
                },
                {
                    question: "Can I upgrade my token package later?",
                    answer:
                        "Yes. You can purchase additional tokens at any time to expand your access.",
                },
                {
                    question: "Do I need to install anything?",
                    answer:
                        `No. ${COMPANY_NAME} works directly in your browser. Manuals are accessible from any device.`,
                },
            ],
        },
    ],
};

export default schema;