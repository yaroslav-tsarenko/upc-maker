import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: `Terms & Conditions – ${COMPANY_NAME}`,
        description:
            `T&Cs for using ${COMPANY_NAME}: ordering custom technical manuals, internal currency, accounts, payments, data protection, and liability.`,
        keywords: [
            "terms",
            "terms and conditions",
            "contract",
            COMPANY_NAME?.toLowerCase() || "manuals",
            "manuals",
            "privacy",
            "liability",
            "payment",
            "currency"
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms`,
            description: "Transparent conditions. Manuals made simple.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Terms & Conditions – Overview",
            description:
                `These Terms govern the use of ${COMPANY_NAME}, a platform where users can order custom technical manuals by providing device details and paying with internal currency. By registering or using the platform, you accept these Terms. These Terms apply to all users worldwide.`
        },
        {
            type: "text",
            title: "1. Definitions",
            bullets: [
                `“Platform” – the ${COMPANY_NAME} website/application operated by ${COMPANY_LEGAL_NAME}.`,
                "“User” – any registered individual or business using the service.",
                "“Manual” – a digital technical manual generated on the basis of user input.",
                "“Internal Currency” – credits purchased or earned, used exclusively on the Platform to order manuals.",
                "“Order” – a request placed by a User to generate a manual."
            ]
        },
        {
            type: "text",
            title: "2. Scope and Contract Formation",
            description:
                `These Terms apply to all orders placed through ${COMPANY_NAME}. A contract is formed by registration, explicit acceptance of the Terms, or use of the Platform. Deviations are only valid if confirmed in writing by ${COMPANY_LEGAL_NAME}.`
        },
        {
            type: "text",
            title: "3. Accounts and Responsibilities",
            description:
                "Users must register to access the service. Account credentials must be kept secure. The account holder is responsible for all activity conducted under their account.",
            bullets: [
                "Only accurate and truthful data may be provided when ordering manuals.",
                "Internal currency balances are tied to accounts and are non-transferable.",
                "Suspicious or fraudulent activity may result in suspension or termination."
            ]
        },
        {
            type: "text",
            title: "4. Service Description",
            description:
                `${COMPANY_NAME} provides AI-assisted technical manuals based on user-provided device information. Manuals are delivered in digital format (PDF or similar). The Platform does not guarantee that manuals fully replace official manufacturer documentation.`
        },
        {
            type: "text",
            title: "5. Internal Currency, Payments, and Billing",
            description:
                "Users must purchase internal currency credits to place orders. Prices for manuals are displayed on the Platform in credits. Purchased credits are non-refundable unless required by law.",
            bullets: [
                "Credits can be purchased via supported payment providers.",
                "Credits cannot be exchanged for real currency.",
                "Orders will only be processed once sufficient credits are available."
            ]
        },
        {
            type: "text",
            title: "6. Orders and Delivery",
            description:
                "Orders are placed by submitting device details and paying with internal currency. Manuals are typically generated automatically and delivered digitally within a short timeframe. Delivery times may vary depending on system load and input complexity."
        },
        {
            type: "text",
            title: "7. Acceptable Use",
            bullets: [
                "No unlawful, misleading, or harmful submissions are permitted.",
                "Users may not upload offensive or harmful content.",
                "Manuals are for personal or business use only and may not be resold."
            ]
        },
        {
            type: "text",
            title: "8. Content, Rights, and IP",
            description:
                `All rights in the Platform, software, and branding belong to ${COMPANY_LEGAL_NAME} or licensors. Manuals generated for Users are licensed for personal/business use; redistribution or resale is prohibited unless explicitly agreed.`
        },
        {
            type: "text",
            title: "9. Data Protection and Privacy",
            description:
                `${COMPANY_NAME} processes personal data under applicable UK and EU data protection laws. Purpose limitation, data minimization, and transparency apply. See the separate Privacy Policy for details.`
        },
        {
            type: "text",
            title: "10. Liability",
            description:
                `To the extent permitted by law, ${COMPANY_LEGAL_NAME} is not liable for indirect damages, data loss, or business interruption resulting from use of the Platform. Liability is limited to intent, gross negligence, and personal injury under mandatory law.`
        },
        {
            type: "text",
            title: "11. Termination",
            description:
                `Users may terminate their account at any time. ${COMPANY_LEGAL_NAME} may suspend or terminate accounts for breach of these Terms or fraudulent activity. Remaining internal currency may be forfeited upon termination unless required otherwise by law.`
        },
        {
            type: "text",
            title: "12. Changes to Services and Terms",
            description:
                `${COMPANY_NAME} may update, expand, or modify features for legitimate reasons (security, legal compliance, improvements). Material changes to these Terms will be announced in advance. Continued use after the effective date constitutes acceptance.`
        },
        {
            type: "text",
            title: "13. Governing Law and Venue",
            description:
                "These Terms are governed by the laws of England and Wales. Exclusive venue—where permissible—shall be London, UK."
        },
        {
            type: "text",
            title: "14. Contact",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `General inquiries: ${COMPANY_EMAIL}`,
                `Support: ${COMPANY_EMAIL}`
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description:
                "This version takes effect upon publication and supersedes prior versions. The version published on the website is authoritative."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default termsSchema;