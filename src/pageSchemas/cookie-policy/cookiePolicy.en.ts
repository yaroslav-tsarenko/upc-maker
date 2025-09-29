import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_LEGAL_NAME,
    COMPANY_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: `Cookie Policy – ${COMPANY_NAME}`,
        description: `How ${COMPANY_NAME} uses cookies, for what purposes, how long they persist, and how to manage your consent.`,
        keywords: [
            "cookies",
            "cookie policy",
            "privacy",
            "tracking",
            "consent",
            "manuals",
            "devices",
            COMPANY_NAME?.toLowerCase() || "manuals"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookie Policy",
            description: "Transparent information about cookies & consent.",
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
            description: `This Cookie Policy explains how ${COMPANY_NAME} (“we”, “us”, “our”) uses cookies and similar technologies (for example localStorage, sessionStorage and pixels) on the Service. It complements our Privacy Policy. By using the site or interacting with our cookie banner, you can manage or give consent to non-essential cookies as described below.`
        },
        {
            type: "text",
            title: "2. What are cookies?",
            description: "Cookies are small text files placed on your device when you visit websites. They help provide core functionality (e.g. login sessions), remember your preferences, measure and improve site performance, and (with your consent) support marketing and analytics."
        },
        {
            type: "text",
            title: "3. Cookie categories we use",
            bullets: [
                "Necessary / Essential — required for core platform functions (login, security, session management). These cookies do not require consent.",
                "Functional — remember your settings and preferences (language, display, UI choices).",
                "Performance / Analytics — measure site usage, errors and load times to improve reliability and performance. These are used under legitimate interests and / or consent depending on the tool.",
                "Marketing / Advertising — used only if you enable them: campaign attribution, remarketing and interest-based content (consent required).",
                "Security / Anti-abuse — detect unusual patterns and protect the site and users from fraud and bots."
            ]
        },
        {
            type: "text",
            title: "4. Typical cookies (examples)",
            bullets: [
                "session_id — Purpose: login session (necessary) • Lifetime: session",
                "csrf_token — Purpose: CSRF protection (necessary) • Lifetime: session",
                "consent_state — Purpose: stores your cookie consent choice (functional/necessary) • Lifetime: 6–12 months",
                "ui_prefs — Purpose: language / layout preferences (functional) • Lifetime: ~6 months",
                "perf_metrics — Purpose: performance analytics (analytics) • Lifetime: 1–3 months",
                "campaign_src — Purpose: campaign attribution (marketing) • Lifetime: 1–3 months",
                "Note: exact cookie names, lifetimes and third-party providers may change — current details are shown in the cookie control panel on the site."
            ]
        },
        {
            type: "text",
            title: "5. Consent and lawful basis",
            bullets: [
                "Essential cookies: strictly necessary for the Service and used without consent.",
                "Non-essential cookies (functional, analytics, marketing): set only after you give consent via our cookie banner or user settings, except where we can rely on legitimate interests (e.g. limited analytics).",
                "The lawful bases we rely on include: performance of contract, consent and legitimate interests (fraud prevention, service improvement, dispute defence)."
            ]
        },
        {
            type: "text",
            title: "6. How we record and retain consent",
            description: "When you give consent we record the decision (checkbox text/version of policy), an ISO 8601 timestamp, the IP address and user-agent string as evidence. Consent and related order/transaction records are retained for a minimum of 24 months and up to 6 years for enterprise/disputed matters, consistent with our Privacy Policy."
        },
        {
            type: "text",
            title: "7. Third parties and international transfers",
            description: "We use third-party providers (payment processors, analytics, hosting, marketing platforms) that may set cookies. Some providers may process data outside the UK/EEA; where transfers occur we ensure adequate safeguards (UK adequacy, Standard Contractual Clauses or equivalent). A list of third-party providers is available in the site cookie control panel."
        },
        {
            type: "text",
            title: "8. How to manage or withdraw cookie consent",
            bullets: [
                "Use the cookie banner / cookie settings on the site to accept, decline or customise non-essential cookies.",
                "You can withdraw consent at any time via the cookie settings link in the footer.",
                "You can also remove cookies via your browser settings (clear cookies / site data) or use private/incognito mode. Note that deleting cookies or disabling certain cookies may degrade site functionality (for example you may be logged out)."
            ]
        },
        {
            type: "text",
            title: "9. Changes to this Policy",
            description: "We may update this Cookie Policy from time to time (for example when we add new integrations). Material changes will be notified by a prominent notice on the Service or by e-mail to registered users. The policy’s effective date will be updated."
        },
        {
            type: "text",
            title: "10. Contact",
            bullets: [
                "privacy@ilovemanual.co.uk",
                `General: ${COMPANY_EMAIL}`,
                `Legal: ${COMPANY_LEGAL_NAME}`,
                `Address: ${COMPANY_ADDRESS}`,
                "LIGHTING UP THE SKY LTD — Dept 6265, 126 East Ferry Road, Canary Wharf, London, E14 9FP."
            ]
        }
    ]
};

export default cookiePolicyEn;
