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
        description: `Terms for using ${COMPANY_NAME}: accounts, QR code generation, payments, refunds, IP, liability, privacy, and more.`,
        keywords: [
            "terms",
            "terms and conditions",
            "contract",
            COMPANY_NAME?.toLowerCase() || "qr-codes",
            "qr codes",
            "privacy",
            "liability",
            "payment",
            "currency"
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms`,
            description: "Transparent conditions. QR codes made simple.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            description: "Effective date: 18th September 2025"
        },
        {
            type: "text",
            title: "1. Introduction",
            description: `These Terms and Conditions ("Terms") govern your use of the ${COMPANY_NAME} website and services (the "Service") operated by ${COMPANY_LEGAL_NAME} (company number: ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}) ("we", "us", "our" or the "Company"). These Terms form a legally binding agreement between you ("you", "User", "Customer") and the Company. By accessing or using the Service, registering an account, generating or customizing QR codes, or purchasing premium features, you agree to be bound by these Terms. If you do not agree to any part of the Terms you must not use the Service.`
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                `"Account" means the User account created on the Service.`,
                `"QR Code(s)" means any digital QR code created or customized via the Service (including PNG, SVG, JPEG or PDF formats).`,
                `"Feature(s)" means additional design, customization, export, or tracking functionalities available on the Service.`,
                `"Product(s)" means QR Codes and any other goods or services offered via the Service.`,
                `"You/Your/Customer" means the person or legal entity who uses the Service or purchases Products.`
            ]
        },
        {
            type: "text",
            title: "3. Eligibility and Account Registration",
            bullets: [
                "You must be at least 18 years of age to register for an Account and to use the Service. If you are registering on behalf of a company or other legal entity you confirm that you have authority to do so.",
                "When registering you must provide accurate, current and complete information and keep such information up to date. You are responsible for maintaining the confidentiality of your Account credentials and for all activity that occurs under your Account.",
                "You must notify us immediately of any unauthorised use of your Account or any other breach of security."
            ]
        },
        {
            type: "text",
            title: "4. Services and Features",
            bullets: [
                "Basic QR Code generation is free of charge.",
                "Premium features (such as custom branding, social media icons, high-resolution exports, analytics, and API access) may require payment.",
                "Products are delivered digitally through your dashboard or via download links.",
                "We may update, add, or remove features from time to time."
            ]
        },
        {
            type: "text",
            title: "5. Ordering, Payment and Checkout",
            bullets: [
                "All orders are subject to acceptance by the Company. We may refuse or cancel any order for any reason, including suspected fraud, technical errors, or errors in price or product description.",
                "Accepted payment methods are displayed at checkout. You warrant that you are authorised to use any payment method you provide.",
                "At checkout you will be shown: (a) the price of the selected features or products; (b) applicable taxes, fees and charges. You must confirm these before completing the transaction.",
                "Products are delivered digitally and considered provided once download or access is granted. We do not guarantee continuous availability of the Service."
            ]
        },
        {
            type: "text",
            title: "6. Refunds, Cancellation and Consumer Rights",
            bullets: [
                "Under UK consumer law, you may have a statutory right to cancel certain distance contracts. However, this right may be lost where digital content is supplied immediately after your express agreement to begin supply without the right to cancel.",
                "Refunds may be available only for unused or defective purchases. Refund requests must be submitted before use.",
                `If a Product (QR code export or feature) is defective or not as described, contact our support team at ${COMPANY_EMAIL}. If we cannot remedy the issue within a reasonable time, you may be entitled to a refund or other remedy under law.`,
                `To request a refund, contact us at ${COMPANY_EMAIL} with your Account details, order reference and full details. We will investigate and respond within a reasonable time.`
            ]
        },
        {
            type: "text",
            title: "7. Intellectual Property Rights",
            bullets: [
                `All intellectual property rights in the Service and Products are owned by or licensed to ${COMPANY_LEGAL_NAME} unless otherwise indicated.`,
                "On generation of a QR Code, you are granted a limited, non-exclusive, non-transferable, revocable licence to use it for your personal or business purposes. Unless agreed in writing, you may not:",
                "(a) resell QR codes as a standalone product;",
                "(b) remove or obscure any copyright, trade mark or other proprietary notice on the Service;",
                "(c) misuse the Service to generate QR codes for illegal, harmful, or fraudulent purposes."
            ]
        },
        {
            type: "text",
            title: "8. Warranties and Disclaimers",
            bullets: [
                "We warrant that we have the right to grant you the rights under these Terms.",
                "Except as expressly provided, the Service and Products are provided \"as is\" and \"as available\". The Company excludes all other warranties, express or implied, to the fullest extent permitted by law."
            ]
        },
        {
            type: "text",
            title: "9. Limitation of Liability",
            bullets: [
                "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other liability which cannot be limited or excluded by law.",
                "Subject to the above, the Company’s total liability to you is limited to the aggregate amount paid by you for the Products giving rise to the claim in the 12 months preceding the claim.",
                "The Company is not liable for any indirect, special or consequential loss, loss of profits, business, goodwill, anticipated savings, data, or similar losses, even if foreseeable."
            ]
        },
        {
            type: "text",
            title: "10. Indemnity",
            description: "You agree to indemnify and hold harmless the Company, its officers, directors, employees and agents from and against any and all losses, liabilities, claims, demands, damages, costs and expenses (including reasonable legal fees) arising out of or in connection with: (a) your breach of these Terms; (b) your misuse of the Service or Products; or (c) your violation of any applicable law or the rights of any third party."
        },
        {
            type: "text",
            title: "11. Data Protection",
            bullets: [
                `We process personal data in accordance with our Privacy Policy (see website). We comply with the UK GDPR and Data Protection Act 2018.`,
                "By using the Service you consent to the processing of your personal data in accordance with the Privacy Policy."
            ]
        },
        {
            type: "text",
            title: "12. Third Party Content and Links",
            description: "The Service may contain links to third party websites and resources. We do not control and are not responsible for the content, privacy policies or practices of third party sites. Links are provided for convenience only and do not imply endorsement."
        },
        {
            type: "text",
            title: "13. Suspension and Termination",
            bullets: [
                "We may suspend, restrict or terminate your access to the Service or your Account immediately and without notice if we reasonably suspect breach of these Terms, fraudulent or illegal activity, or for security or technical reasons.",
                "Upon suspension or termination, any rights licensed to you cease immediately. Termination does not affect accrued rights or liabilities."
            ]
        },
        {
            type: "text",
            title: "14. Changes to These Terms",
            description: "We may amend these Terms from time to time. Any material changes will be notified to registered users by email or by a prominent notice on the Service. Amended Terms take effect on the date specified in the notice. Continued use of the Service after publication constitutes acceptance."
        },
        {
            type: "text",
            title: "15. Notices",
            description: `All notices to the Company should be sent by email to ${COMPANY_EMAIL} or by post to the registered address. Notices to you may be given via email or by posting on the Service.`
        },
        {
            type: "text",
            title: "16. Governing Law and Jurisdiction",
            bullets: [
                "These Terms and any dispute or claim arising out of or in connection with them are governed by the laws of England and Wales.",
                "The courts of England and Wales have exclusive jurisdiction, except as required by consumer law in Scotland, Northern Ireland, or the EU."
            ]
        },
        {
            type: "text",
            title: "17. Miscellaneous",
            bullets: [
                "If any provision of these Terms is found to be invalid, illegal or unenforceable, that provision shall be severed and the remainder shall continue in full force and effect.",
                "No failure or delay by the Company in exercising any right under these Terms shall operate as a waiver of that right."
            ]
        },
        {
            type: "text",
            title: "18. Contact Details",
            bullets: [
                `Company: ${COMPANY_LEGAL_NAME}`,
                `Registered office: ${COMPANY_ADDRESS}`,
                `Company no.: ${COMPANY_NUMBER}`,
                `Email: ${COMPANY_EMAIL}`
            ]
        }
    ]
};

export default termsSchema;
