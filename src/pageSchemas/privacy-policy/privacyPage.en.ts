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
        description: `Privacy Policy for ${COMPANY_NAME}: what personal data we collect, how we use it for QR code generation, how long we keep it, and your rights.`,
        keywords: [
            "privacy policy",
            "data protection",
            "gdpr",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "qr codes",
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
            description: `We respect your privacy. This Privacy Policy explains what personal data ${COMPANY_NAME} collects when you use our QR code generator, why we use it, how long we keep it, and how you can exercise your rights.`
        },
        {
            type: "text",
            title: "2. Data We Collect",
            bullets: [
                "Name, email, and account details (if you register)",
                "Payment transaction references for premium features (not full card data)",
                "QR code generation history and saved projects (if logged in)",
                "IP address, device details, and access logs",
                "Support requests and correspondence"
            ]
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            bullets: [
                "To provide QR code generation, customization, and related features (performance of contract)",
                "To process payments for premium services and prevent fraud (legal obligation / legitimate interests)",
                "To respond to support requests and manage refunds (performance of contract / legitimate interests)",
                "To send marketing communications if you opt in (consent)"
            ]
        },
        {
            type: "text",
            title: "4. Sharing and Transfers",
            description: "We share data with payment providers, hosting/cloud platforms, analytics, and support tools where necessary. Some processors may operate outside the UK/EEA; where transfers occur we apply safeguards such as UK adequacy decisions and Standard Contractual Clauses (SCCs)."
        },
        {
            type: "text",
            title: "5. Cookies",
            description: "We use cookies and similar technologies to keep the site functional (e.g. login sessions, preferences) and to measure performance. For details and consent management, see our Cookie Policy."
        },
        {
            type: "text",
            title: "6. Retention",
            description: "We keep account, billing, and transaction records for a minimum of 24 months and up to 6 years for disputes or compliance. Saved QR codes and design history are retained as long as your account is active, unless you delete them."
        },
        {
            type: "text",
            title: "7. Your Rights",
            description: "You have rights under data protection law, including access, correction, deletion, restriction, portability, objection, and withdrawal of consent. To exercise these rights, contact us at " + COMPANY_EMAIL + ". We may request ID for verification."
        },
        {
            type: "text",
            title: "8. Security",
            description: "We use reasonable technical and organisational measures to protect personal data, including encryption in transit, secure storage, access controls, logging, and regular backups."
        },
        {
            type: "text",
            title: "9. Changes",
            description: "We may update this Policy when we add new features or legal requirements change. Significant updates will be notified by email or a prominent notice on our website."
        },
        {
            type: "text",
            title: "10. Contact & Complaints",
            bullets: [
                `Data protection enquiries: ${COMPANY_EMAIL}`,
                `Support: ${COMPANY_EMAIL}`,
                "If you are unsatisfied, you may lodge a complaint with the UK Information Commissioner’s Office (ICO) or your local data protection authority."
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This Privacy Policy takes effect upon publication and supersedes all earlier versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default privacyPolicySchema;
