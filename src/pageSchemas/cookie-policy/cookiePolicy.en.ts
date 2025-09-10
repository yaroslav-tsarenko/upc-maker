import { PageSchema } from "@/components/constructor/page-render/types";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: "Cookie Policy – ShipsterAI Sweden",
        description:
            "Learn which cookies ShipsterAI uses, for what purposes, how long they persist, and how to manage your consent.",
        keywords: [
            "cookies",
            "cookie policy",
            "privacy",
            "tracking",
            "consent",
            "sweden",
            "shipsterai"
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
            title: "Cookie Policy – Overview",
            description:
                "This Cookie Policy explains how ShipsterAI (“we”, “us”) uses cookies and similar technologies on our platform. It complements our Privacy Policy. By clicking “Accept” in the banner or continuing to use the site, you consent—where required—to the use of non-essential cookies."
        },
        {
            type: "text",
            title: "What are cookies?",
            description:
                "Cookies are small text files stored on your device when you visit websites. They help provide functionality (e.g., login sessions), understand usage, and improve services. In addition to cookies, we may use Local Storage, Session Storage, and pixels (collectively, “trackers”)."
        },
        {
            type: "text",
            title: "Cookie categories",
            bullets: [
                "Necessary – required for core functions (login, security, payment flow). Without these, the platform will not work properly.",
                "Functional – remembers your settings (language, layout, preferences).",
                "Performance/Analytics – measures usage, errors, and load times to improve stability (e.g., aggregated statistics).",
                "Marketing/Ads – only if enabled: reach measurement, campaign attribution, interest-based content.",
                "Security/Anti-abuse – detects unusual patterns, protects against fraud and bot traffic."
            ]
        },
        {
            type: "text",
            title: "Typical cookies & lifetimes (examples)",
            bullets: [
                "shipster_session – Purpose: login session (necessary) • Lifetime: session",
                "csrf_token – Purpose: CSRF protection (necessary) • Lifetime: session",
                "consent_state – Purpose: stores your consent choice (necessary) • Lifetime: 6–12 months",
                "ui_prefs – Purpose: language/theme (functional) • Lifetime: ~6 months",
                "perf_metrics – Purpose: performance metrics (analytics) • Lifetime: 1–3 months",
                "campaign_src – Purpose: campaign attribution (marketing) • Lifetime: 1–3 months"
            ]
        },
        {
            type: "text",
            title: "Third-party & similar technologies",
            description:
                "We may use third-party services (e.g., maps, analytics, payments, error tracking). These providers may set their own cookies/IDs. We choose partners carefully and safeguard privacy. See the Privacy Policy and—where available—our consent banner (CMP) under “Details”.",
            bullets: [
                "Analytics (aggregated, pseudonymized, IP masking where feasible)",
                "Error/crash reporting",
                "Payment/billing providers",
                "Embedded media (e.g., video CDNs)"
            ]
        },
        {
            type: "text",
            title: "Consent & withdrawal",
            description:
                "We set non-essential cookies only with your consent. You can change your choice at any time via the “Cookie Settings” link in the footer or by deleting/blocking cookies in your browser. Withdrawal takes effect going forward; processing already performed remains unaffected."
        },
        {
            type: "text",
            title: "Manage cookies in your browser (quick guide)",
            bullets: [
                "Chrome: Settings → Privacy and security → Cookies and other site data",
                "Safari (macOS/iOS): Settings → Privacy → Manage Website Data",
                "Firefox: Settings → Privacy & Security → Cookies and Site Data",
                "Edge: Settings → Cookies and site permissions"
            ]
        },
        {
            type: "text",
            title: "Do Not Track & opt-out",
            description:
                "If your browser sends a “Do Not Track” (DNT) signal, we attempt—where technically reasonable—to respect it. Note: not all third parties reliably honor DNT; use their own opt-out mechanisms where applicable."
        },
        {
            type: "text",
            title: "Changes to this policy",
            description:
                "We may update this policy (e.g., for new services or legal requirements). The version published on this page is authoritative. Major changes will be communicated via the banner or an in-app notice."
        },
        {
            type: "text",
            title: "Contact",
            bullets: [
                "General: hello@shipster.ai",
                "Privacy: privacy@shipster.ai",
                "Address: ShipsterAI AB, Vasagatan 10, 111 20 Stockholm, Sweden"
            ]
        },
        {
            type: "text",
            title: "Last updated",
            description: "14 August 2025"
        }
    ]
};

export default cookiePolicyEn;
