import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

export const cookiePolicyEn: PageSchema = {
    meta: {
        title: `Cookie Policy – ${COMPANY_NAME}`,
        description: `How ${COMPANY_NAME} uses cookies, for what purposes, how long they persist, and how you can manage your consent while generating QR codes.`,
        keywords: [
            "cookies",
            "cookie policy",
            "privacy",
            "tracking",
            "consent",
            "QR codes",
            "custom QR generator",
            COMPANY_NAME?.toLowerCase() || "qr-codes"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookie Policy",
            description: "Transparent information about cookies & consent on our QR code generator.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Effective date",
            description: "18th September 2025"
        },
        {
            type: "text",
            title: "1. Overview",
            description: `This Cookie Policy explains how ${COMPANY_NAME} (“we”, “us”, “our”) uses cookies and similar technologies (for example localStorage, sessionStorage and pixels) on our QR Code Generator. It complements our Privacy Policy. By using the site or interacting with our cookie banner, you can manage or give consent to non-essential cookies as described below.`
        },
        {
            type: "text",
            title: "2. What are cookies?",
            description: "Cookies are small text files placed on your device when you visit websites. They help provide core functionality (e.g. keeping your QR generation session active), remember preferences, measure and improve performance, and (with your consent) support analytics and marketing."
        },
        {
            type: "text",
            title: "3. Cookie categories we use",
            bullets: [
                "Necessary / Essential — required for core platform functions (QR code generation, login, session management). These cookies do not require consent.",
                "Functional — remember your settings and preferences (saved QR templates, chosen language, dark/light mode).",
                "Performance / Analytics — measure site usage, errors and load times to improve QR generation speed and reliability. Used under legitimate interests and/or consent depending on the tool.",
                "Marketing / Advertising — used only if you enable them: campaign attribution, remarketing, interest-based content (consent required).",
                "Security / Anti-abuse — detect unusual activity and protect the site and users from fraud or automated bots."
            ]
        },
        {
            type: "text",
            title: "4. Typical cookies (examples)",
            bullets: [
                "session_id — Purpose: login session (necessary) • Lifetime: session",
                "csrf_token — Purpose: CSRF protection (necessary) • Lifetime: session",
                "consent_state — Purpose: stores your cookie consent choice (functional/necessary) • Lifetime: 6–12 months",
                "qr_prefs — Purpose: saves your QR generator preferences (functional) • Lifetime: ~6 months",
                "perf_metrics — Purpose: performance analytics (analytics) • Lifetime: 1–3 months",
                "campaign_src — Purpose: campaign attribution (marketing) • Lifetime: 1–3 months",
                "Note: exact cookie names, lifetimes and providers may change — see the cookie control panel for the latest information."
            ]
        },
        {
            type: "text",
            title: "5. Consent and lawful basis",
            bullets: [
                "Essential cookies: strictly necessary for the Service and used without consent.",
                "Non-essential cookies (functional, analytics, marketing): set only after you give consent via our cookie banner or settings, except where legitimate interests apply (e.g. limited analytics).",
                "The lawful bases we rely on include: performance of contract, consent, and legitimate interests (fraud prevention, service improvement, dispute defence)."
            ]
        },
        {
            type: "text",
            title: "6. How we record and retain consent",
            description: "When you give consent we record the decision (checkbox text/version of policy), an ISO 8601 timestamp, the IP address, and user-agent string as evidence. Consent and related records are retained for a minimum of 24 months and up to 6 years for enterprise or disputed matters, in line with our Privacy Policy."
        },
        {
            type: "text",
            title: "7. Third parties and international transfers",
            description: "We use third-party providers (payment processors, analytics, hosting, marketing platforms) that may set cookies. Some providers may process data outside the UK/EEA; where transfers occur we ensure safeguards (UK adequacy, Standard Contractual Clauses or equivalent). See the cookie control panel for current providers."
        },
        {
            type: "text",
            title: "8. How to manage or withdraw cookie consent",
            bullets: [
                "Use the cookie banner / settings on the site to accept, decline or customise non-essential cookies.",
                "You can withdraw consent at any time via the cookie settings link in the footer.",
                "You can also remove cookies via browser settings (clear cookies / site data) or use private/incognito mode. Note: deleting cookies may degrade functionality (e.g. you may lose saved QR templates)."
            ]
        },
        {
            type: "text",
            title: "9. Changes to this Policy",
            description: "We may update this Cookie Policy from time to time (e.g. when we add new features or integrations). Material changes will be notified by a prominent notice on the site or by e-mail to registered users. The effective date will be updated."
        },
        {
            type: "text",
            title: "10. Contact",
            bullets: [
                `General: ${COMPANY_EMAIL}`,
                `Legal: ${COMPANY_LEGAL_NAME}`,
                `Address: ${COMPANY_ADDRESS}`,
            ]
        }
    ]
};

export default cookiePolicyEn;
