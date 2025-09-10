import { media } from "@/resources/media";

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
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
    ]
};

export const footerContent = {
    logo: {
        src: media.logo.src,
        alt: "Site Logo",
        href: "/"
    },
    columns: [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" }
            ]
        },
        {
            title: "Support",
            links: [
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" }
            ]
        }
    ],
    contact: {
        email: "info@example.com",
        phone: "+1 234 567 890",
        address: "123 Main St, City, Country"
    }
};