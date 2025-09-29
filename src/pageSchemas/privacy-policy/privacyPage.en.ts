import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: `Privacy Policy – ${COMPANY_NAME}`,
        description: `Short Privacy Policy for ${COMPANY_NAME}: what data we collect, why, how long we keep it, and your rights.`,
        keywords: [
            "privacy policy",
            "data protection",
            "gdpr",
            COMPANY_NAME?.toLowerCase() || "manuals",
            "manuals",
            "personal data",
            "security"
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privacy Policy`,
            description: "Transparent data protection and privacy standards.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Introduction",
            description: "We respect your privacy. This short Privacy Policy explains what personal data we collect, why we use it, how long we keep it and how you can exercise your rights."
        },
        {
            type: "text",
            title: "2. Data We Collect",
            bullets: [
                "Name, email, billing address",
                "Payment transaction references (not full card data)",
                "Order history",
                "Account credentials (hashed)",
                "IP address, device and access logs",
                "Support correspondence"
            ]
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            bullets: [
                "To provide and operate the Service and deliver digital products (performance of contract)",
                "To process payments and prevent fraud (legal obligation / legitimate interests)",
                "To respond to support requests and manage refunds (performance of contract / legitimate interests)",
                "To send marketing where you consent (consent)"
            ]
        },
        {
            type: "text",
            title: "4. Sharing and Transfers",
            description: "We share data with payment processors, cloud hosting providers, analytics and support tools, and professional advisers where necessary. Some processors may be outside the UK/EEA; we use approved safeguards (UK adequacy, SCCs or equivalent) for any transfers."
        },
        {
            type: "text",
            title: "5. Cookies",
            description: "We use cookies and similar technologies. Essential cookies are required for core functionality. For details and opt-outs see our Cookie Policy."
        },
        {
            type: "text",
            title: "6. Retention",
            description: "We retain order and transaction records (including token ledger and checkout acknowledgement evidence) for a minimum of 24 months and up to 6 years for disputed or enterprise matters. Other account and support data are retained only as long as necessary."
        },
        {
            type: "text",
            title: "7. Your Rights",
            description: "You have rights under data protection law, including access, rectification, erasure, restriction, portability, objection and withdrawal of consent. To exercise rights contact info@ilovemanual.co.uk. We may request ID to verify requests."
        },
        {
            type: "text",
            title: "8. Security",
            description: "We implement reasonable technical and organisational measures (access controls, encryption in transit, logging and backups) to protect personal data."
        },
        {
            type: "text",
            title: "9. Changes",
            description: "We may update this Policy. Material changes will be notified by email or a prominent notice on the Service."
        },
        {
            type: "text",
            title: "10. Contact & Complaints",
            bullets: [
                `Data protection enquiries: ${COMPANY_EMAIL}`,
                `Support: ${COMPANY_EMAIL}`,
                "If unsatisfied, you may lodge a complaint with the UK Information Commissioner’s Office (ICO)."
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This Privacy Policy takes effect upon publication and supersedes any prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default privacyPolicySchema;
