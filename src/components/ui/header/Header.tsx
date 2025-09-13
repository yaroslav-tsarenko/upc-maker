"use client";

import React, { useEffect, useState } from "react";
import { headerContent } from "@/resources/content";
import styles from "./Header.module.scss";
import { IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import AuthButtons from "@/components/widgets/auth-buttons/AuthButtons";
import { headerStyles } from "@/resources/styles-config";
import DrawerMenu from "@/components/ui/drawer/Drawer";

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const user = useUser();
    const headerClass = [
        styles.header,
        headerStyles.type === "fixed" ? styles.fixed : styles.default,
        headerStyles.type === "fixed" && isScrolled ? styles.scrolled : ""
    ].join(" ");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={headerClass}>
                <div className={styles.headerInner}>
                    <a href={headerContent.logo.href} className={styles.logo}>
                        <Image width={120} height={30} src={headerContent.logo.src} alt={headerContent.logo.alt}/>
                    </a>
                    <nav className={styles.nav}>
                        {headerContent.links.map(link => (
                            <a href={link.href} key={link.label} className={styles.link}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className={styles.actions}>
                        <AuthButtons/>
                    </div>
                    <div className={styles.menuButton}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open navigation"
                        >
                            <FaBars/>
                        </IconButton>
                    </div>
                </div>
            </header>
            <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </>
    );
};

export default Header;