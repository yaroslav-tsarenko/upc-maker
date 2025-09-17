import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Professional Manuals on Demand`,
        description:
            `Access practical manuals created by specialists. Unlock any guide instantly using tokens.`,
        keywords: ["manuals", "guides", "technical", "documentation"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME}`,
            description:
                "Expert manuals for every tool and device. Unlock with tokens, use anytime.",
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
                alt: "Manuals Library",
            },
            right: {
                type: "text",
                title: "Expert Manuals at Your Fingertips",
                description:
                    `${COMPANY_NAME} gives you access to a growing library of manuals written by industry specialists. From everyday equipment to advanced tools — unlock knowledge when you need it.`,
                bullets: [
                    "Created and verified by professionals",
                    "Covers a wide range of equipment and tools",
                    "Instant digital access",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `How ${COMPANY_NAME} Works`,
                description:
                    `Each manual can be unlocked with tokens. Tokens give you flexibility: spend them only on the guides you need, when you need them.`,
                bullets: [
                    "Buy tokens once, use them anytime",
                    "No subscription pressure",
                    "Simple and transparent access",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image2",
                width: "100%",
                height: "400px",
                alt: "Token Access",
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
                alt: "Dashboard Preview",
            },
            right: {
                type: "text",
                title: "Clear and Organized Dashboard",
                description:
                    "Browse manuals by category, track your token balance, and manage your downloads from a single place.",
                bullets: [
                    "Easy manual search by categories",
                    "Track token usage and history",
                    "Download guides anytime",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Why Choose ${COMPANY_NAME}?`,
                description:
                    `Unlike random internet tutorials, ${COMPANY_NAME} manuals are created and reviewed by specialists. You get accurate, structured, and reliable information in every guide.`,
                bullets: [
                    "Verified by experts",
                    "Well-structured and clear format",
                    "Trusted source for technical knowledge",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Specialist Manuals",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `Start Using ${COMPANY_NAME} Today`,
                description:
                    "Unlock manuals instantly with tokens and gain access to reliable knowledge for your equipment and tools.",
                bullets: [
                    "Instant access to guides",
                    "Pay only for what you need",
                    "Knowledge from real specialists",
                ],
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
                {
                    image: "image5",
                    title: "Wide Manual Library",
                    description: "Access manuals across multiple categories and industries.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
                {
                    image: "image6",
                    title: "Token Flexibility",
                    description: "Use tokens only on the manuals you need, no recurring fees.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
                {
                    image: "image7",
                    title: "Expert-Created Guides",
                    description: "Every manual is written and reviewed by specialists.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
                {
                    image: "image8",
                    title: "Always Accessible",
                    description: "Download and revisit your manuals at any time.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
            ],
        },
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer:
                        `${COMPANY_NAME} is a platform that provides expert-written manuals for different tools and equipment.`,
                },
                {
                    question: "How do I access a manual?",
                    answer:
                        "Each manual can be unlocked by spending tokens. Buy tokens once and use them whenever you need.",
                },
                {
                    question: "Do manuals stay available after purchase?",
                    answer:
                        "Yes. Once unlocked, you can access your manual anytime through your dashboard.",
                },
            ],
        },
    ],
};

export default schema;