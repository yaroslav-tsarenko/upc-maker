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
        description:
            `Privacy Policy for ${COMPANY_NAME}: how we collect, use, and protect your personal data when ordering custom technical manuals.`,
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
            title: `Privacy Policy – Overview`,
            description:
                `This Privacy Policy explains how ${COMPANY_NAME} collects, uses, and protects your personal data when you use the platform. By accessing or using our services, you consent to the practices described in this Policy.`
        },
        {
            type: "text",
            title: "1. Data We Collect",
            bullets: [
                "Account information: name, email, password.",
                "Payment details (processed securely via third-party providers).",
                "Device and order details submitted for manual generation.",
                "Usage data such as IP address, browser type, and activity logs."
            ]
        },
        {
            type: "text",
            title: "2. How We Use Your Data",
            bullets: [
                "To process orders and deliver manuals.",
                "To manage accounts and authenticate users.",
                "To improve platform performance and user experience.",
                "To comply with legal and regulatory requirements."
            ]
        },
        {
            type: "text",
            title: "3. Legal Basis for Processing",
            description:
                "We process your personal data under one or more of the following legal bases: consent, contract performance, legal obligations, and legitimate interests."
        },
        {
            type: "text",
            title: "4. Data Sharing",
            description:
                "We do not sell personal data. Data may be shared with trusted third parties solely for service provision (e.g., payment processors, hosting providers) under strict confidentiality agreements."
        },
        {
            type: "text",
            title: "5. Data Retention",
            description:
                "We retain personal data only as long as necessary for the purposes outlined in this Policy or as required by law. Users may request deletion of their account and associated data, subject to legal retention obligations."
        },
        {
            type: "text",
            title: "6. Data Security",
            bullets: [
                "Encryption of sensitive data in transit and at rest.",
                "Access controls and authentication measures.",
                "Regular monitoring and security updates."
            ]
        },
        {
            type: "text",
            title: "7. Your Rights",
            bullets: [
                "Access your personal data.",
                "Request correction or deletion.",
                "Request restriction of processing.",
                "Object to processing under certain conditions.",
                "Data portability where applicable."
            ]
        },
        {
            type: "text",
            title: "8. Cookies and Tracking",
            description:
                "We use cookies and similar technologies to enhance user experience, analyze usage, and improve our services. Users can manage cookie preferences in their browser settings."
        },
        {
            type: "text",
            title: "9. International Data Transfers",
            description:
                "If data is transferred outside the UK/EU, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or equivalent legal mechanisms."
        },
        {
            type: "text",
            title: "10. Children’s Privacy",
            description:
                `${COMPANY_NAME} does not knowingly collect data from children under 16. If we become aware of such data, it will be deleted promptly.`
        },
        {
            type: "text",
            title: "11. Changes to the Privacy Policy",
            description:
                "We may update this Privacy Policy from time to time. Material changes will be announced in advance on the Platform. Continued use after changes take effect constitutes acceptance."
        },
        {
            type: "text",
            title: "12. Contact",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Data Protection inquiries: ${COMPANY_EMAIL}`,
                `Support: ${COMPANY_EMAIL}`
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description:
                "This Privacy Policy takes effect upon publication and supersedes any prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default privacyPolicySchema;