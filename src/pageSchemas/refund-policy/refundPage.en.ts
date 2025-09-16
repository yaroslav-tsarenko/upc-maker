import { PageSchema } from "@/components/constructor/page-render/types";

const refundPolicySchema: PageSchema = {
    meta: {
        title: "Refund Policy – TechGuide",
        description:
            "Refund Policy for TechGuide: rules for refunds on internal currency purchases and orders of technical manuals.",
        keywords: [
            "refund policy",
            "refunds",
            "returns",
            "techguide",
            "manuals",
            "credits",
            "internal currency"
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: "TechGuide – Refund Policy",
            description: "Clear and transparent refund conditions.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Refund Policy – Overview",
            description:
                "This Refund Policy explains when and how refunds may be granted for purchases made on TechGuide. By using the Platform, you agree to this Refund Policy alongside our Terms & Conditions."
        },
        {
            type: "text",
            title: "1. Internal Currency Purchases",
            description:
                "Users purchase internal currency credits to order custom manuals. All credit purchases are generally non-refundable, except where required by consumer protection law in your jurisdiction.",
            bullets: [
                "Credits are tied to the registered account and cannot be transferred.",
                "Credits cannot be exchanged for real currency.",
                "Promotional or bonus credits are non-refundable under all circumstances."
            ]
        },
        {
            type: "text",
            title: "2. Orders for Manuals",
            description:
                "Refunds are not typically available once an order has been placed, as manuals are custom generated based on user input. However, exceptions may be made in the following cases:",
            bullets: [
                "A manual was not delivered within a reasonable time due to a system error.",
                "The file delivered was corrupt or unusable, and support could not resolve the issue.",
                "The order was charged but not processed due to technical issues."
            ]
        },
        {
            type: "text",
            title: "3. How to Request a Refund",
            description:
                "If you believe you are eligible for a refund, please contact our support team within 14 days of purchase. Provide your account details, order ID, and reason for the refund request. Each case will be reviewed individually."
        },
        {
            type: "text",
            title: "4. Processing of Refunds",
            description:
                "Approved refunds for currency purchases will be processed back to the original payment method where possible. Processing times may vary depending on the payment provider.",
            bullets: [
                "Refunds are typically processed within 5–10 business days after approval.",
                "Refunds will not exceed the amount originally paid for the credits.",
                "Any internal currency already spent cannot be refunded."
            ]
        },
        {
            type: "text",
            title: "5. Fraud or Abuse",
            description:
                "TechGuide reserves the right to refuse refunds in cases of fraud, abuse, or violation of the Terms & Conditions."
        },
        {
            type: "text",
            title: "6. Changes to the Refund Policy",
            description:
                "We may update this Refund Policy from time to time. Material changes will be published in advance on the Platform. Continued use after changes take effect constitutes acceptance."
        },
        {
            type: "text",
            title: "7. Governing Law",
            description:
                "This Refund Policy is governed by the laws of England and Wales. Exclusive venue—where permissible—shall be London, UK."
        },
        {
            type: "text",
            title: "8. Contact",
            bullets: [
                "Company: JUNGLE SAPPHIRE LTD",
                "Company number: 15545389",
                "Address: 20 Wenlock Road, London, England, N1 7GU",
                "Support: support@techguide.ai"
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description:
                "This Refund Policy takes effect upon publication and supersedes any prior versions."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 September 2025"
        }
    ]
};

export default refundPolicySchema;
