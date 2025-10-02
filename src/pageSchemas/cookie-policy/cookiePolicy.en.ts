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
        description: `Learn how ${COMPANY_NAME} uses cookies to support UPC barcode generation, save user preferences, and enhance platform performance.`,
        keywords: [
            "cookies",
            "cookie policy",
            "upc barcode",
            "tracking",
            "privacy",
            "consent",
            "barcode generator",
            COMPANY_NAME?.toLowerCase() || "upc-generator"
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cookie Policy",
            description: "Transparent use of cookies and tracking tools on our UPC barcode platform.",
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
            title: "1. Introduction",
            description: `This Cookie Policy explains how ${COMPANY_NAME} ("we", "us", "our") uses cookies and similar technologies (e.g. localStorage, sessionStorage, pixels) when you use our UPC Barcode Generator. It supplements our Privacy Policy. By using our platform or interacting with our cookie banner, you manage your consent preferences for non-essential cookies.`
        },
        {
            type: "text",
            title: "2. What are cookies?",
            description: `Cookies are small text files stored on your device. They allow websites to remember your session (e.g. barcode creation in progress), user preferences (e.g. output format, UPC type), improve performance, and — with your permission — help us run analytics and marketing campaigns.`
        },
        {
            type: "text",
            title: "3. Types of cookies we use",
            bullets: [
                "**Essential cookies** — Required for core UPC creation tools, session persistence, and user authentication. These do not require consent.",
                "**Functional cookies** — Remember your layout preferences, last used barcode type (UPC-A, UPC-E), default export settings (PNG/SVG), or saved templates.",
                "**Analytics cookies** — Help us understand user interaction with barcode tools, detect slowdowns, and improve accuracy and load time.",
                "**Marketing cookies** — Set only with your consent. Used for remarketing, campaign tracking (e.g. if you came from an affiliate or ad), or to personalize promotions for business customers.",
                "**Security cookies** — Detect fraud, abuse, or repeated invalid input (e.g. brute force attempts, spam in label templates)."
            ]
        },
        {
            type: "text",
            title: "4. Common cookies and storage keys",
            bullets: [
                "`upc_session_id` — Maintains your login session (essential) • Duration: session",
                "`csrf_token` — Prevents cross-site request forgery (essential) • Duration: session",
                "`cookie_consent_state` — Stores your consent preferences (functional) • Duration: 6–12 months",
                "`last_upc_settings` — Saves your last used barcode config (functional) • Duration: ~6 months",
                "`perf_tracking` — Collects performance timing data (analytics) • Duration: 1–2 months",
                "`utm_campaign_src` — Stores ad campaign info (marketing) • Duration: 1–3 months",
                "_Note: names and retention periods may change. Always refer to the in-app cookie settings panel for the latest info._"
            ]
        },
        {
            type: "text",
            title: "5. Legal basis for cookie usage",
            bullets: [
                "Essential cookies are used without consent, as they are strictly necessary.",
                "All other cookies (functional, analytics, marketing) are only used after you give consent via the banner or settings panel.",
                "We rely on consent, performance of contract (e.g. account/session persistence), and legitimate interests (e.g. fraud prevention, product improvement)."
            ]
        },
        {
            type: "text",
            title: "6. How we store your consent decision",
            description: `Your consent decision is logged along with the time, user-agent, and IP address (if applicable). This record is securely stored for at least 24 months or longer for legal purposes, in line with our Privacy Policy.`
        },
        {
            type: "text",
            title: "7. Third-party services",
            description: `We may use third-party tools (like analytics, payments, cloud services) that also use cookies. Some data may be processed outside your country (e.g. in the US). We ensure appropriate safeguards are in place — like Standard Contractual Clauses (SCC) or UK/EU adequacy decisions.`
        },
        {
            type: "text",
            title: "8. Managing or revoking consent",
            bullets: [
                "Click the cookie icon or settings link in the site footer to update your preferences.",
                "Withdraw consent at any time by disabling optional cookies.",
                "You can also clear stored cookies from your browser settings or use private/incognito mode. Note: this may reset your saved templates or export settings."
            ]
        },
        {
            type: "text",
            title: "9. Updates to this policy",
            description: `We may revise this Cookie Policy to reflect changes in our tools, vendors, or legal requirements. Material updates will be announced via a notice on our platform or emailed to registered users.`
        },
        {
            type: "text",
            title: "10. Contact",
            bullets: [
                `Email: ${COMPANY_EMAIL}`,
                `Legal Entity: ${COMPANY_LEGAL_NAME}`,
                `Registered Address: ${COMPANY_ADDRESS}`
            ]
        }
    ]
};


export default cookiePolicyEn;
