import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const refundPolicySchema: PageSchema = {
    meta: {
        title: `Refund Policy – ${COMPANY_NAME}`,
        description: `Clear policy regarding refunds for token-based purchases and downloadable barcode products.`,
        keywords: [
            "refund policy",
            "UPC refund",
            "barcode return",
            "token refund",
            "digital product",
            COMPANY_NAME?.toLowerCase() || "barcode",
            "returns"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund Policy`,
            description: "Transparent and fair refund policy for UPC and barcode generation services.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Overview",
            bullets: [
                "Refunds follow this policy and applicable consumer rights.",
                "Typical refund processing time: 5–10 business days after approval.",
                "Refunds are capped at the original payment amount.",
                "Tokens (credits) already used to download barcodes are non-refundable.",
                "Tokens are tied to your account and not redeemable for real money.",
                "Bonus/promotional tokens are non-refundable.",
                `To request a refund, contact ${COMPANY_EMAIL} with your order details.`
            ]
        },
        {
            type: "text",
            title: "2. Applicability",
            description: `This policy applies to refunds for purchased tokens and downloadable barcode products from ${COMPANY_NAME}. It does not override your rights under local consumer protection laws.`
        },
        {
            type: "text",
            title: "3. Token Types",
            bullets: [
                "Tokens — internal credits used to purchase barcodes or export formats.",
                "Unused Tokens — credits not yet spent on any product.",
                "Used Tokens — credits that have already been redeemed for a download.",
                "Bonus Tokens — credits given during promotions."
            ]
        },
        {
            type: "text",
            title: "4. Refund Rules",
            bullets: [
                "Refund value cannot exceed the initial payment (excluding gateway fees).",
                "No refunds on used tokens unless the exported barcode is defective.",
                "Unused tokens may be refunded at purchase value upon request (fees may apply).",
                "Tokens are non-transferable and tied to your account.",
                "No refunds for bonus or promotional tokens.",
                "If you agreed to instant delivery and downloaded content, your legal right to withdraw may no longer apply."
            ]
        },
        {
            type: "text",
            title: "5. Submitting a Refund Request",
            description: `To submit a request, email ${COMPANY_EMAIL} with:`,
            bullets: [
                "Your order ID.",
                "Account email.",
                "Whether your refund is for unused tokens or a faulty product.",
                "Details and evidence if claiming for a faulty product.",
                "Preferred refund method."
            ]
        },
        {
            type: "text",
            title: "6. Review & Decision",
            bullets: [
                "We review transaction logs, download activity, and evidence.",
                "Refunds are usually returned via the original payment method.",
                "If denied, you’ll receive an explanation with further steps."
            ]
        },
        {
            type: "text",
            title: "7. Fraud & Abuse",
            description: "Refunds may be denied and accounts suspended in cases of misuse, fraud, or chargeback abuse. Chargebacks during active requests are treated as disputes."
        },
        {
            type: "text",
            title: "8. Changes to This Policy",
            description: "We may update this policy with notice via our website or email."
        },
        {
            type: "text",
            title: "9. Record Retention",
            description: "We store transaction and refund records for at least 2 years or longer in case of audits or disputes."
        },
        {
            type: "text",
            title: "10. Contact",
            bullets: [
                `Support: ${COMPANY_EMAIL}`,
                `Address: ${COMPANY_LEGAL_NAME}, ${COMPANY_ADDRESS}`
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This refund policy is effective from 18 September 2025."
        }
    ]
};

export default refundPolicySchema;