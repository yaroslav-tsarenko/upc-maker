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
        description: `Privacy Policy for ${COMPANY_NAME}: what personal data we collect, how we use it for UPC barcode generation and management, how long we keep it, and your rights.`,
        keywords: [
            "privacy policy",
            "data protection",
            "gdpr",
            COMPANY_NAME?.toLowerCase() || "upc barcodes",
            "upc barcodes",
            "personal data",
            "security"
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Privacy Policy`,
            description: "Transparent data protection and privacy standards for barcode management.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Introduction",
            description: `We respect your privacy. This Privacy Policy explains what personal data ${COMPANY_NAME} collects when you use our UPC barcode generation and management services, why we use it, how long we retain it, and how you can exercise your rights.`
        },
        {
            type: "text",
            title: "2. Data We Collect",
            bullets: [
                "Name, email, and account details (if you register)",
                "Payment transaction references for premium barcode features (not full card data)",
                "UPC barcode history and saved barcode sets (if logged in)",
                "IP address, device information, and access logs",
                "Support messages and client communication"
            ]
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            bullets: [
                "To provide UPC barcode generation, storage, and export (performance of contract)",
                "To process payments and detect fraud (legal obligation / legitimate interests)",
                "To assist with support requests and issue resolution (performance of contract / legitimate interests)",
                "To send product updates or marketing emails if you opt in (consent)"
            ]
        },
        {
            type: "text",
            title: "4. Sharing and Transfers",
            description: "We share your data with trusted service providers (e.g., cloud storage, analytics, payment processors) strictly as needed. Some partners may be outside the UK/EEA; in such cases, we use safeguards like SCCs and adequacy agreements."
        },
        {
            type: "text",
            title: "5. Cookies",
            description: "Our website uses cookies to ensure functionality (e.g., login persistence, language settings) and to analyze traffic. Full details are provided in our Cookie Policy."
        },
        {
            type: "text",
            title: "6. Retention",
            description: "We retain billing records and transaction logs for 24–72 months to meet legal and tax requirements. Saved barcode templates and project history remain available as long as your account is active, unless manually deleted."
        },
        {
            type: "text",
            title: "7. Your Rights",
            description: `You may request access, correction, deletion, restriction, or portability of your data. You can also object to processing or withdraw consent. Contact us at ${COMPANY_EMAIL} to exercise these rights. We may verify your identity before processing requests.`
        },
        {
            type: "text",
            title: "8. Security",
            description: "We employ robust security measures, including TLS encryption, secure servers, firewalls, and role-based access control to protect your data against unauthorized access, loss, or alteration."
        },
        {
            type: "text",
            title: "9. Changes",
            description: "We may update this Privacy Policy to reflect legal changes or service enhancements. You will be notified via email or platform notice in case of significant updates."
        },
        {
            type: "text",
            title: "10. Contact & Complaints",
            bullets: [
                `Privacy questions: ${COMPANY_EMAIL}`,
                `Customer support: ${COMPANY_EMAIL}`,
                "If unsatisfied, you may file a complaint with the UK ICO or your regional data authority."
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This policy is effective immediately upon publication and overrides all prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default privacyPolicySchema;
