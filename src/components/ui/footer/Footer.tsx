"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import {footerContent} from "@/resources/content";
import {useI18n} from "@/context/i18nContext";
import visa from "@/assets/icons/visa-logo.svg"
import mastercard from "@/assets/icons/mastercard-logo.svg"

const Footer: React.FC = () => {
    const {logo, columns, contact, socials, legal} = footerContent;
    const {lang} = useI18n();

    const translations = {
        en: {
            company: "Company",
            address: "Address",
            email: "Email",
            phone: "Phone",
            rights: "All rights reserved.",
        },
        tr: {
            company: "Şirket",
            address: "Adres",
            email: "E-posta",
            phone: "Telefon",
            rights: "Tüm hakları saklıdır.",
        },
    };

    const t = translations[lang];

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href={logo.href} className={styles.logo}>
                    <Image src={logo.src} alt={logo.alt} width={120} height={40}/>
                </Link>

                {/* Columns */}
                <div className={styles.columns}>
                    {columns.map((col) => (
                        <div key={col.title} className={styles.column}>
                            <h4>{col.title}</h4>
                            {col.links.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Company Info */}
                    {legal && (
                        <div className={styles.column}>
                            <h4>{t.company}</h4>
                            <p>{legal.companyName}</p>
                            {legal.companyNumber && <p>{legal.companyNumber}</p>}
                            {legal.addressLines?.map((line, idx) => (
                                <p key={idx}>{line}</p>
                            ))}
                            {contact.email && (
                                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                            )}
                            {contact.phone && (
                                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            )}
                            <div className={styles.logosVisa}>
                                <Image src={visa} alt="visa" width={50} height={16}/>
                                <Image src={mastercard} alt="mastercard" width={50} height={16}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Socials */}
            {!!socials?.length && (
                <div className={styles.socials}>
                    {socials.map((s) => {
                        const Icon = s.icon;
                        const isExternal = !s.href?.startsWith("/");
                        return (
                            <a
                                key={s.label}
                                href={s.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                aria-label={s.label}
                            >
                                <Icon size={22}/>
                            </a>
                        );
                    })}
                </div>
            )}

            {/* Bottom rights */}
            <div className={styles.rights}>
                © {new Date().getFullYear()} {t.rights}
            </div>
        </footer>
    );
};

export default Footer;
