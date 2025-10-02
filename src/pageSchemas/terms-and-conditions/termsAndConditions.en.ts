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
        description: `Terms for using ${COMPANY_NAME}: accounts, UPC barcode generation, payments, refunds, IP, liability, and more.`,
        keywords: [
            "terms",
            "terms and conditions",
            "contract",
            COMPANY_NAME?.toLowerCase() || "barcodes",
            "upc barcodes",
            "privacy",
            "liability",
            "payment",
            "retail compliance"
        ],
        canonical: "/terms",
        ogImage: {
            title: `${COMPANY_NAME} – Terms`,
            description: "Transparent terms and fair conditions for UPC barcode generation.",
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
            description: `These Terms and Conditions ("Terms") govern your use of the ${COMPANY_NAME} website and services (the "Service") operated by ${COMPANY_LEGAL_NAME} (company number: ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}) ("we", "us", "our" or the "Company"). These Terms form a legally binding agreement between you ("you", "User", "Customer") and the Company. By accessing or using the Service, registering an account, generating UPC barcodes, or purchasing premium features, you agree to be bound by these Terms. If you do not agree to any part of the Terms you must not use the Service.`
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                `"Account" means the User account created on the Service.`,
                `"UPC Barcode(s)" means any digital Universal Product Code barcode created or customized via the Service (including PNG, SVG, JPEG or PDF formats).`,
                `"Feature(s)" means additional barcode design, formatting, export, or bulk generation functionalities available on the Service.`,
                `"Product(s)" means UPC barcodes and any other goods or services offered via the Service.`,
                `"You/Your/Customer" means the person or legal entity who uses the Service or purchases Products.`
            ]
        },
        {
            type: "text",
            title: "3. Eligibility and Account Registration",
            bullets: [
                "You must be at least 18 years of age to register for an Account and use the Service. If acting on behalf of an organization, you confirm your authority to do so.",
                "You are responsible for maintaining the accuracy of your account information and for any activity that occurs under your credentials.",
                "Notify us immediately if you suspect unauthorized access to your Account."
            ]
        },
        {
            type: "text",
            title: "4. Services and Features",
            bullets: [
                "Basic UPC barcode generation is available for free.",
                "Advanced features (such as bulk export, custom sizing, high-resolution images, and format selection) may require payment.",
                "Products are delivered digitally via secure download or dashboard access.",
                "The Service may evolve over time with new features added or existing features updated."
            ]
        },
        {
            type: "text",
            title: "5. Ordering, Payment and Checkout",
            bullets: [
                "All orders must be confirmed by the Company. Orders may be rejected for suspected fraud, errors, or availability issues.",
                "Accepted payment methods are shown during checkout. You must have authorization to use the provided payment method.",
                "You will see full pricing details including applicable fees and taxes before confirming your order.",
                "Barcodes are delivered digitally and are considered provided once access is granted. Availability is not guaranteed at all times."
            ]
        },
        {
            type: "text",
            title: "6. Refunds, Cancellation and Consumer Rights",
            bullets: [
                "Digital barcode products are delivered immediately. By completing your purchase, you agree to waive statutory cancellation rights where applicable.",
                "Refunds may be offered for unused or defective barcodes. Requests must be submitted before usage.",
                `If a barcode is corrupted, unreadable, or does not meet standard format specifications, contact our support at ${COMPANY_EMAIL}.`,
                `Provide your order reference and account information. We aim to resolve issues or process eligible refunds promptly.`
            ]
        },
        {
            type: "text",
            title: "7. Intellectual Property Rights",
            bullets: [
                `All IP rights in the barcode generator platform and related tools are owned or licensed by ${COMPANY_LEGAL_NAME}.`,
                "When you generate a barcode, you are granted a limited, non-exclusive license to use it for legitimate business or personal purposes.",
                "You may not:",
                "(a) Resell generated barcodes as a standalone product;",
                "(b) Remove copyright or branding from the Service UI;",
                "(c) Use the Service to create counterfeit or misleading product labels."
            ]
        },
        {
            type: "text",
            title: "8. Warranties and Disclaimers",
            bullets: [
                "We guarantee the right to provide the Services under these Terms.",
                "Except as explicitly stated, all services and products are provided 'as-is' without warranty of merchantability or fitness for purpose.",
                "We do not guarantee acceptance of barcodes by third-party retailers if your UPC numbers are not GS1-verified."
            ]
        },
        {
            type: "text",
            title: "9. Limitation of Liability",
            bullets: [
                "Nothing excludes liability for death, personal injury caused by negligence, or fraud.",
                "Our total liability is capped at the total amount paid by you for barcodes in the past 12 months.",
                "We are not liable for indirect damages, data loss, or business interruption related to your use of generated barcodes."
            ]
        },
        {
            type: "text",
            title: "10. Indemnity",
            description: `You agree to indemnify and hold harmless ${COMPANY_NAME}, its affiliates and employees against claims, liabilities, or losses arising from your use of the Service, especially if used in violation of applicable laws, including product labeling or consumer protection regulations.`
        },
        {
            type: "text",
            title: "11. Data Protection",
            bullets: [
                "We collect and process user data in accordance with the UK GDPR and our Privacy Policy.",
                "By using the Service, you agree to such processing and warrant the accuracy of data you provide."
            ]
        },
        {
            type: "text",
            title: "12. Third Party Content and Links",
            description: "Links to third-party sites may appear within our Service. These are provided for informational purposes. We assume no responsibility for their content or privacy practices."
        },
        {
            type: "text",
            title: "13. Suspension and Termination",
            bullets: [
                "We may suspend or terminate your account for breach of these Terms or misuse of the platform (e.g. barcode forgery or automation abuse).",
                "Upon termination, you must stop using the platform. Previously downloaded barcodes remain usable unless access was fraudulently obtained."
            ]
        },
        {
            type: "text",
            title: "14. Changes to These Terms",
            description: "We may update these Terms. Changes will be announced via the Service or email. Continued use of the Service after updates implies acceptance."
        },
        {
            type: "text",
            title: "15. Notices",
            description: `Contact us at ${COMPANY_EMAIL} or by mail at our registered address. We may send service-related notices to your account email.`
        },
        {
            type: "text",
            title: "16. Governing Law and Jurisdiction",
            bullets: [
                "These Terms are governed by the laws of England and Wales.",
                "Any disputes will be subject to the jurisdiction of the English courts, unless otherwise required by consumer law."
            ]
        },
        {
            type: "text",
            title: "17. Miscellaneous",
            bullets: [
                "If any provision is found unenforceable, it will be removed, and the rest will remain valid.",
                "Failure to enforce any right under these Terms shall not constitute a waiver."
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
