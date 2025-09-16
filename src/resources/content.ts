import { media } from "@/resources/media";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const headerContent = {
    logo: {
        src: media.logo.src,
        alt: "Site Logo",
        href: "/"
    },
    links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Pricing", href: "/pricing" },
        { label: "Faq", href: "/faq" },
        { label: "Get Started", href: "/get-started" },
    ]
};

export const footerContent = {
    logo: { src: media.logo_white.src, alt: "Site Logo", href: "/" },
    columns: [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
            ],
        },
    ],
    contact: {
        email: "info@example.com",
        phone: "+1 234 567 890",
        address: "123 Main St, City, Country",
    },

    legal: {
        companyName: "JUNGLE SAPPHIRE LTD",
        companyNumber: "15545389",
        addressLines: [
            "20 Wenlock Road",
            "London, England",
            "N1 7GU",
        ],
    },
    socials: [
        { label: "Twitter", href: "https://x.com/...", icon: FaTwitter },
        { label: "Facebook", href: "https://facebook.com/...", icon: FaFacebook },
        { label: "LinkedIn", href: "https://linkedin.com/...", icon: FaLinkedin },
    ],
};