import { PageSchema } from "@/components/constructor/page-render/types";
const termsSchema: PageSchema = {
    meta: {
        title: "Terms & Conditions – ShipsterAI Sweden",
        description:
            "T&Cs for using the ShipsterAI logistics platform in Sweden: services, pricing, obligations, data protection, liability, termination, and venue.",
        keywords: [
            "terms",
            "terms and conditions",
            "contract",
            "shipsterai",
            "sweden",
            "logistics",
            "privacy",
            "liability",
            "termination",
            "pricing"
        ],
        canonical: "/terms",
        ogImage: {
            title: "ShipsterAI – Terms",
            description: "Transparent conditions. Swedish precision.",
            bg: "#ffffff",
            color: "#000000"
        }
    },
    blocks: [
        {
            type: "text",
            title: "Terms & Conditions – Overview",
            description:
                "These Terms govern the use of the ShipsterAI platform by shippers (customers) and carriers in Sweden and, where applicable, the EU/EEA. By registering or using the platform, you accept these Terms. The Terms are aimed at business customers (B2B)."
        },
        {
            type: "text",
            title: "1. Definitions",
            bullets: [
                "“Platform” – the web/mobile application operated by ShipsterAI.",
                "“Shipper” – business customer commissioning transport services.",
                "“Carrier” – transport service provider offering and executing jobs.",
                "“User” – natural person operating a business account.",
                "“Job/Order” – a concrete transport job including parameters and documents.",
                "“SLA” – agreed service levels (e.g., response time, ETA quality)."
            ]
        },
        {
            type: "text",
            title: "2. Scope and Contract Formation",
            description:
                "These Terms apply to all functions (dispatching, matchmaking, tracking, communication, invoicing support). A contract is formed by registration, explicit acceptance of the Terms, or use of the Platform. Deviating individual agreements take precedence; otherwise, the rules complement each other."
        },
        {
            type: "text",
            title: "3. Accounts, Roles, and Care",
            description:
                "Companies manage access, roles, and permissions independently (least-privilege). Credentials must be kept confidential. The account holder is responsible for actions via the account unless unauthorized use is proven despite reasonable safeguards.",
            bullets: [
                "Recommended: MFA, strong passwords, regular permission reviews.",
                "Immediately revoke access for departing staff.",
                "Report suspected abuse to support@shipster.ai."
            ]
        },
        {
            type: "text",
            title: "4. Service Description",
            description:
                "ShipsterAI provides an AI-supported logistics platform: intelligent load/carrier matching, ETA forecasts, price indications, tracking, document flows, in-app chat, and invoicing support. Unless otherwise agreed, the service is provided as SaaS without source code delivery."
        },
        {
            type: "text",
            title: "5. Availability, Maintenance, and Support",
            description:
                "ShipsterAI delivers with reasonable care and aims for high uptime. Planned maintenance and incidents are communicated transparently. Support is provided according to published service hours; individual SLAs can be agreed separately."
        },
        {
            type: "text",
            title: "6. Prices, Fees, and Billing",
            description:
                "The current price list or contractually agreed rates apply (excl. VAT). Fees may be per order or usage-based. Promotions and discounts apply only if explicitly stated.",
            bullets: [
                "Electronic invoicing (PDF/e-invoice) to the registered address.",
                "Payment terms as per contract/offer; if absent – 30 days net.",
                "In case of delay: statutory default interest, possible dunning/collection fees."
            ]
        },
        {
            type: "text",
            title: "7. Orders between Shipper and Carrier",
            description:
                "The Platform facilitates transport contracts between shippers and carriers. The transport contract is concluded directly between these parties. Obligations (e.g., load securing, ADR, cold chain), timings, documentation, and liability follow from the order and applicable law (e.g., Swedish law, CMR)."
        },
        {
            type: "text",
            title: "8. Acceptable Use",
            bullets: [
                "No unlawful, misleading, or security-jeopardizing content or actions.",
                "No circumvention of security; no unauthorized scraping or reverse engineering.",
                "Compliance with sanctions, export, customs, and industry regulations.",
                "Only truthful, verifiable company and order data."
            ]
        },
        {
            type: "text",
            title: "9. Content, Rights, and IP",
            description:
                "All rights in the Platform, brands, designs, and models belong to ShipsterAI or licensors. Users receive a non-exclusive, non-transferable, revocable right of use during the contract term. Data provided by the user remains the user’s property; ShipsterAI receives the rights necessary to operate and perform."
        },
        {
            type: "text",
            title: "10. Data Protection (GDPR/Swedish Law)",
            description:
                "ShipsterAI processes personal data under GDPR and Swedish data protection law. Purpose limitation, data minimization, and transparency apply. See the separate Privacy Policy.",
            bullets: [
                "Technical/organizational measures (encryption, logging).",
                "Data hosting within the EU/EEA; data processing agreements where needed.",
                "Data subject rights are honored according to law."
            ]
        },
        {
            type: "text",
            title: "11. Security and Compliance",
            bullets: [
                "Role/permission model (least-privilege), audit trails, monitoring.",
                "Responsible Disclosure: responsible-disclosure@shipster.ai.",
                "Commitment to due care, anti-corruption, and fair competition."
            ]
        },
        {
            type: "text",
            title: "12. Third Parties and Integrations",
            description:
                "The Platform may use third-party services (maps, telematics, EDI, payments). Availability, terms, and privacy of such providers remain their responsibility. ShipsterAI selects partners carefully and strives for stable integrations but does not warrant error-free operation."
        },
        {
            type: "text",
            title: "13. Payments and Taxes",
            description:
                "Payments are processed via designated providers. Taxes, duties, and customs are borne by the respective contracting party unless agreed otherwise."
        },
        {
            type: "text",
            title: "14. Changes to Services and Terms",
            description:
                "ShipsterAI may evolve, adapt, or discontinue features for legitimate reasons (security, legal, performance). Material changes to these Terms will be announced in advance. Continued use after the effective date constitutes acceptance."
        },
        {
            type: "text",
            title: "15. Term and Termination",
            description:
                "The agreement runs indefinitely unless stated otherwise. Either party may terminate with reasonable notice. Immediate termination is possible for material breach, payment default, or security risk.",
            bullets: [
                "After termination: access is disabled; data export available upon request.",
                "Statutory retention periods remain unaffected."
            ]
        },
        {
            type: "text",
            title: "16. Warranty",
            description:
                "ShipsterAI performs according to good industry practice and the state of the art. To the extent permitted by law, no warranties are given for merchantability, fitness for a particular purpose, or uninterrupted availability. Beta/preview features may be limited."
        },
        {
            type: "text",
            title: "17. Liability",
            description:
                "ShipsterAI is fully liable for intent/gross negligence and personal injury under mandatory law. For simple negligence, liability exists only for breaches of essential contractual duties and is limited to typically foreseeable damage. Indirect damages, lost profits, and data loss are excluded where legally permissible."
        },
        {
            type: "text",
            title: "18. Indemnification",
            description:
                "The user shall indemnify ShipsterAI from third-party claims arising from contractual or unlawful use of the user’s account (e.g., unlawful content, IP infringements) where attributable to the user."
        },
        {
            type: "text",
            title: "19. Force Majeure",
            description:
                "No party is liable for non-performance caused by events beyond its reasonable control (natural events, war, strike, government actions, large-scale network outages)."
        },
        {
            type: "text",
            title: "20. Export, Sanctions, and Customs",
            description:
                "Parties shall comply with applicable export, sanctions, customs, and trade control laws. ShipsterAI may refuse or limit services where required by law."
        },
        {
            type: "text",
            title: "21. Confidentiality",
            description:
                "Non-public information (trade/operational secrets, contracts, technical details) must be treated as confidential. Statutory disclosure obligations remain reserved."
        },
        {
            type: "text",
            title: "22. Assignment and Subcontracting",
            description:
                "Rights/obligations may not be assigned without the other party’s consent (except in universal succession). ShipsterAI may use subcontractors and remains responsible for their performance."
        },
        {
            type: "text",
            title: "23. Severability",
            description:
                "If any provision is wholly/partly invalid, the remaining provisions remain in force. A valid provision closest to the intended purpose shall apply instead."
        },
        {
            type: "text",
            title: "24. Governing Law and Venue",
            description:
                "Material Swedish law applies excluding its conflict-of-law rules. Exclusive venue—where permissible—is Stockholm, Sweden."
        },
        {
            type: "text",
            title: "25. Dispute Resolution",
            description:
                "Parties shall first seek an amicable settlement. Failing that, and where agreed, mediation or arbitration may be initiated under a separate clause."
        },
        {
            type: "text",
            title: "26. Contact",
            bullets: [
                "General: hello@shipster.ai",
                "Support: support@shipster.ai",
                "Sales/Demos: sales@shipster.ai",
                "Security: responsible-disclosure@shipster.ai",
                "Address: ShipsterAI AB • Examplegatan 10 • 111 20 Stockholm • Sweden"
            ]
        },
        {
            type: "text",
            title: "Effective Date",
            description:
                "This version takes effect upon publication and supersedes prior versions. The version published on the website/platform is authoritative."
        },
        {
            type: "text",
            title: "Valid from",
            description: "18 August 2025"
        }
    ]
};

export default termsSchema;
