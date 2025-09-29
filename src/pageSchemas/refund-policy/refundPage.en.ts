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
        description: `Refund/Return Policy for ${COMPANY_NAME}: rules for refunds on internal currency (Tokens) and digital products.`,
        keywords: [
            "refund policy",
            "refunds",
            "returns",
            COMPANY_NAME?.toLowerCase() || "manuals",
            "manuals",
            "credits",
            "internal currency"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: `${COMPANY_NAME} – Refund Policy`,
            description: "Clear and transparent refund conditions.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "1. Summary",
            bullets: [
                "Refunds are considered in line with this Policy and applicable consumer law.",
                "Processing time: Refunds are typically processed within 5–10 business days after approval.",
                "Refunds will not exceed the amount originally paid for the credits/transaction.",
                "Credits already spent (used to obtain Products) are not refundable.",
                "Credits are account-bound, non-transferable and cannot be exchanged for real currency.",
                "Promotional/bonus credits are non-refundable in all circumstances.",
                `Refund requests should be sent to ${COMPANY_EMAIL} with your order reference and details.`,
                "This Policy may be amended; material changes will be notified as set out below.",
                "If you consented to immediate supply and opened/downloaded content, the statutory right to cancel may be lost — see clause 5."
            ]
        },
        {
            type: "text",
            title: "2. Scope and Legal Note",
            description: `This Policy governs refunds in respect of Tokens (internal credits/“credits”) and digital Products supplied by the Company. It is without prejudice to mandatory statutory consumer rights under UK law (including, where applicable, the Consumer Contracts Regulations 2013 and the Consumer Rights Act 2015). Nothing in this Policy removes or limits rights that cannot be excluded by applicable law.`
        },
        {
            type: "text",
            title: "3. Definitions",
            bullets: [
                "Credits / Tokens — internal currency used on the Service (indicative nominal: 1 Token = 0.01 of chosen currency).",
                "Unused Credits — credits that remain in your account and have not been redeemed.",
                "Redeemed/Spent Credits — credits that have been used to purchase or access a Product.",
                "Promotional / Bonus Credits — credits issued as part of promotions, bonuses or incentives."
            ]
        },
        {
            type: "text",
            title: "4. Refund Principles (Binding Rules)",
            bullets: [
                "Any refund will not exceed the amount originally paid for the Credits or Product (net of any non-refundable processor fees).",
                "No refund for spent Credits, except for defective/not-as-described Products, failed supply, or as required by law.",
                "Unused Credits are generally eligible for refund at the original purchase price if requested before redemption (minus any non-refundable fees).",
                "Credits are account-bound and non-transferable.",
                "Credits are not exchangeable for cash or other real currency except where required by law.",
                "Promotional/bonus Credits are non-refundable under all circumstances.",
                "If you consent to immediate supply and open/download content, your statutory right to cancel may be lost; refunds then only as per clause 4.2 or law.",
                "Custom/bespoke Manuals are non-refundable once substantial work has commenced, except as agreed in writing."
            ]
        },
        {
            type: "text",
            title: "5. How to Request a Refund",
            description: `To request a refund, provide the following to ${COMPANY_EMAIL} (or via the support form):`,
            bullets: [
                "Order reference number (mandatory).",
                "Account e-mail used for the purchase.",
                "Specify whether the request is for Unused Credits or for a Redeemed Product.",
                "For redeemed product claims: full description of the issue and supporting evidence.",
                "Preferred refund method (original payment method preferred).",
                "We will acknowledge within 5 business days, investigate, and process approved refunds within 5–10 business days of approval."
            ]
        },
        {
            type: "text",
            title: "6. Investigation, Evidence and Decisions",
            bullets: [
                "For redeemed Product claims, we examine order/token logs, checkout evidence, delivery logs, and your submitted evidence.",
                "Refunds are normally to the original payment method; alternatives may be offered if not possible.",
                "If a claim is rejected, we provide a clear explanation and your rights to escalate."
            ]
        },
        {
            type: "text",
            title: "7. Chargebacks, Fraud and Abuse",
            description: "If a chargeback is initiated while a refund is pending, it is treated as a dispute and full evidence is provided to the payment provider. The Company may refuse refunds and suspend/close Accounts in cases of fraud, abuse, or repeated unwarranted chargebacks."
        },
        {
            type: "text",
            title: "8. Changes to this Policy",
            description: "The Company may amend this Refund Policy at any time. Material changes will be notified to registered users by e-mail or a prominent notice. Changes apply prospectively only."
        },
        {
            type: "text",
            title: "9. Record Keeping and Retention",
            description: "We retain records necessary to investigate and substantiate refund decisions for a minimum of 24 months and up to 6 years for enterprise/disputed transactions, consistent with our Privacy Policy and applicable law."
        },
        {
            type: "text",
            title: "10. Escalation and Disputes",
            description: `If you disagree with a refund decision, escalate to ${COMPANY_EMAIL} with full reasons and order reference. We will review within 10 business days. This policy does not affect your statutory rights.`
        },
        {
            type: "text",
            title: "11. Examples",
            bullets: [
                "Unused Credits: Purchase 2,000 Tokens at £0.01 = £20; used 300 → unused 1,700 → refund = £17 (minus any non-refundable processor fees).",
                "Downloaded manual: If you consented to immediate supply and downloaded the manual, refund is only possible if the manual is defective/not as described.",
                "Promotional credits: 100 bonus credits awarded during promotion — non-refundable."
            ]
        },
        {
            type: "text",
            title: "12. Contact Details",
            bullets: [
                `Email (support): ${COMPANY_EMAIL}`,
                `Postal: ${COMPANY_LEGAL_NAME} — ${COMPANY_ADDRESS}`
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description: "This Refund Policy takes effect upon publication and supersedes any prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default refundPolicySchema;
