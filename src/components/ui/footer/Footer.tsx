import React from "react";
import styles from "./Footer.module.scss";
import { footerContent } from "@/resources/content";
import Image from "next/image";

const Footer: React.FC = () => {
    const { logo, columns, contact } = footerContent;

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <a href={logo.href} className={styles.logo}>
                    <Image src={logo.src} alt={logo.alt} width={120} height={30} />
                </a>
                <div className={styles.columns}>
                    {columns.map((col) => (
                        <div className={styles.column} key={col.title}>
                            <div className={styles.columnTitle}>{col.title}</div>
                            {col.links.map(link => (
                                <a href={link.href} className={styles.link} key={link.label}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.contact}>
                    {contact.address && (
                        <div className={styles.contactItem}>
                            <strong>Address:</strong> {contact.address}
                        </div>
                    )}
                    {contact.email && (
                        <div className={styles.contactItem}>
                            <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </div>
                    )}
                    {contact.phone && (
                        <div className={styles.contactItem}>
                            <strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.rights}>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;