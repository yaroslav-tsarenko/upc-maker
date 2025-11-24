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
        description: `Updated Terms & Conditions for using ${COMPANY_NAME}, including token rules, refunds, privacy, data protection and legal obligations.`,
        keywords: [
            "terms",
            "terms and conditions",
            "refund policy",
            "privacy",
            "cookies",
            "GDPR"
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: `${COMPANY_NAME} – Terms & Conditions`,
            description: "Legal policies, compliance, refund rules and privacy standards.",
            bg: "#ffffff",
            color: "#000000"
        }
    },

    blocks: [
        /* -------------------- HEADER -------------------- */
        {
            type: "text",
            title: "Terms and Conditions",
            description: "Effective date: 03 October 2025"
        },

        /* -------------------- SECTION 1 -------------------- */
        {
            type: "text",
            title: "1. Introduction",
            description: `
These Terms and Conditions (“Terms”) govern your access to and use of movawe.co.uk and any related pages, applications, and downloadable content (the “Service”), operated by OVERSEAS AGENT LTD (company number ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}) (“Movawe”, “we”, “us”, “our”).

By creating an Account, purchasing tokens, or using any barcode-related features on the Service, you agree to be bound by these Terms.

Movawe provides a platform to generate, validate and download barcode images (UPC/EAN and other formats) using a token-based credit system.

We do not guarantee acceptance of generated barcodes by retailers, carriers, customs authorities or marketplaces.
`
        },

        /* -------------------- SECTION 2 -------------------- */
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "“Account” – your user profile on the Service.",
                "“Tokens / Wallet” – prepaid non-transferable digital credits used for paid features.",
                "“Services” – barcode generation tools, validation checks, bulk export and related features.",
                "“Barcodes / Outputs” – digital barcode images generated based on your inputs.",
                "“Client Data” – product information, identifiers, SKU lists or files you upload.",
                "“Third-Party Platforms” – external platforms such as retailers, logistics providers, marketplaces."
            ]
        },

        /* -------------------- SECTION 3 -------------------- */
        {
            type: "text",
            title: "3. Eligibility & Account Registration",
            bullets: [
                "You must be at least 18 years old or have authority to act for a business.",
                "You must provide accurate information and protect your login credentials.",
                `Security issues must be reported to: ${COMPANY_EMAIL}.`
            ]
        },

        /* -------------------- SECTION 4 -------------------- */
        {
            type: "text",
            title: "4. Nature of Services & Contract Structure",
            bullets: [
                "We provide self-service digital tools for barcode generation.",
                "We do not guarantee acceptance of any Barcode by any retailer or marketplace.",
                "We are not a GS1 organisation and do not allocate GS1 prefixes.",
                "A contract is formed when you create an Account or purchase Tokens."
            ]
        },

        /* -------------------- SECTION 5 -------------------- */
        {
            type: "text",
            title: "5. Scope of Services & Barcodes",
            bullets: [
                "Generate individual or bulk barcodes in supported formats.",
                "Optional validation checks may be available.",
                "Outputs depend on the accuracy of your submitted Client Data.",
                "Compliance, printing and product listing responsibilities remain with you."
            ]
        },

        /* -------------------- SECTION 6 -------------------- */
        {
            type: "text",
            title: "6. Client Data & Responsibilities",
            bullets: [
                "You must have rights to all Client Data provided.",
                "Client Data must be lawful, accurate and non-infringing.",
                "You are responsible for backing up barcodes and exports."
            ]
        },

        /* -------------------- SECTION 7 -------------------- */
        {
            type: "text",
            title: "7. Acceptable Use",
            bullets: [
                "No unauthorized access or security circumvention.",
                "No automated token farming or fraud.",
                "No unlawful, deceptive or harmful use of the Service.",
                "No creation of Barcodes for illegal products."
            ]
        },

        /* -------------------- SECTION 8 -------------------- */
        {
            type: "text",
            title: "8. Tokens, Pricing & Payment",
            bullets: [
                "100 Tokens = £1.00 / €1.17 / $1.29 (unless stated otherwise).",
                "Tokens are prepaid credits, not cash or e-money.",
                "Tokens are consumed when accessing paid features.",
                "Tokens generally do not expire but future expiry rules may be introduced with notice.",
                "Electronic invoices are provided for purchases."
            ]
        },

        /* -------------------- SECTION 9 -------------------- */
        {
            type: "text",
            title: "9. Cancellations, Refunds & Chargebacks",
            bullets: [
                "Consumed Tokens are non-refundable.",
                "Unused Tokens may be refunded only in exceptional cases.",
                "Technical issues attributable to us may result in re-crediting Tokens.",
                "Unfounded chargebacks may lead to account suspension."
            ]
        },

        /* -------------------- SECTION 10 -------------------- */
        {
            type: "text",
            title: "10. Intellectual Property",
            bullets: [
                "The platform and technology remain our property.",
                "You receive a licence to use generated Barcodes for your business.",
                "You may not resell Barcodes as standalone products.",
                "We do not claim ownership of your Client Data."
            ]
        },

        /* -------------------- SECTION 11 -------------------- */
        {
            type: "text",
            title: "11. Confidentiality",
            description: `
Both parties must protect confidential information. Confidentiality does not apply to public information, independently developed information, or information required to be disclosed by law.
`
        },

        /* -------------------- SECTION 12 -------------------- */
        {
            type: "text",
            title: "12. Third-Party Platforms",
            bullets: [
                "We are not responsible for third-party platform policies.",
                "Your use of Barcodes with external platforms is at your sole risk.",
                "You must ensure any integrations are lawful and compliant."
            ]
        },

        /* -------------------- SECTION 13 -------------------- */
        {
            type: "text",
            title: "13. Warranties & Disclaimers",
            bullets: [
                "Services are provided “as-is” and “as available”.",
                "No guarantee that Barcodes meet any retailer’s acceptance rules.",
                "No guarantee of uninterrupted or error-free access."
            ]
        },

        /* -------------------- SECTION 14 -------------------- */
        {
            type: "text",
            title: "14. Limitation of Liability",
            bullets: [
                "Nothing limits liability for fraud or personal injury.",
                "Our total liability is limited to the total Token payments made in the last 12 months.",
                "We are not liable for third-party rejection of Barcodes or indirect losses."
            ]
        },

        /* -------------------- SECTION 15 -------------------- */
        {
            type: "text",
            title: "15. Indemnity",
            description: `
You agree to indemnify and hold Movawe harmless from claims arising from your misuse of the Service or infringement caused by Client Data or your use of Barcodes.
`
        },

        /* -------------------- SECTION 16 -------------------- */
        {
            type: "text",
            title: "16. Data Protection & Privacy",
            description: `
We process personal data in accordance with the UK GDPR and the Data Protection Act 2018. Details are provided in our Privacy Policy.
`
        },

        /* -------------------- SECTION 17 -------------------- */
        {
            type: "text",
            title: "17. Suspension & Termination",
            bullets: [
                "We may suspend accounts for breaches, fraud or security risks.",
                "Account closure does not entitle you to automatic refunds.",
                "We retain certain records for legal compliance."
            ]
        },

        /* -------------------- SECTION 18 -------------------- */
        {
            type: "text",
            title: "18. Changes to the Service or Terms",
            bullets: [
                "We may update features, pricing or Token packages.",
                "Material changes will be communicated via email or in-Service notice.",
                "Continued use of the Service constitutes acceptance."
            ]
        },

        /* -------------------- SECTION 19 -------------------- */
        {
            type: "text",
            title: "19. Governing Law & Jurisdiction",
            bullets: [
                "These Terms are governed by English law.",
                "Disputes fall under the jurisdiction of courts of England and Wales."
            ]
        },

        /* -------------------- SECTION 20 -------------------- */
        {
            type: "text",
            title: "20. Contact Details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Company number: ${COMPANY_NUMBER}`,
                `Registered office: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
            ]
        }
    ]
};

export default termsSchema;
