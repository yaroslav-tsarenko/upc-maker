"use client"

import React, {useEffect, useState} from "react";
import {headerContent} from "@/resources/content";
import styles from "./Header.module.scss";
import {Drawer, IconButton} from "@mui/material";
import {FaArrowRight, FaBars, FaCheckCircle, FaUser} from "react-icons/fa";
import {useUser} from "@/context/UserContext";
import Image from "next/image";
import AuthButtons from "@/components/widgets/auth-buttons/AuthButtons";
import {headerStyles} from "@/resources/styles-config";
import ButtonUI from "@/components/ui/button/ButtonUI";

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const user = useUser();
    const headerClass = [
        styles.header,
        headerStyles.type === "fixed" ? styles.fixed : styles.default,
        isScrolled ? styles.scrolled : ""
    ].join(" ");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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
            <Drawer anchor={headerStyles.sideBarDirection as "left" | "right" | "top" | "bottom"}
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}>

                <div className={styles.content}>
                    <a href={headerContent.logo.href} className={styles.logo} onClick={() => setDrawerOpen(false)}>
                        <Image width={120} height={30} src={headerContent.logo.src} alt={headerContent.logo.alt}/>
                    </a>
                    <nav className={styles.nav} style={{display: "flex", flexDirection: "column", marginTop: 16}}>
                        {headerContent.links.map(link => (
                            <a
                                href={link.href}
                                key={link.label}
                                className={styles.link}
                                onClick={() => setDrawerOpen(false)}
                                style={{marginBottom: 12}}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <AuthButtons/>
                </div>
                <div style={{ display: "grid", gap: "12px", maxWidth: 400, margin: "0 auto" }}>
                    <ButtonUI text="Default" />
                    <ButtonUI text="Rounded" shape="rounded" />
                    <ButtonUI shape="circle" size="md" color="success" startIcon={<FaCheckCircle />} />
                    <ButtonUI text="Outlined" variant="outlined" />
                    <ButtonUI text="Small" size="sm" />
                    <ButtonUI text="Medium" size="md" />
                    <ButtonUI text="Large" size="lg" />
                    <ButtonUI text="Dark" color="dark" />
                    <ButtonUI text="Light" color="light" />
                    <ButtonUI text="Custom Orange" color="#ff5722" />
                    <ButtonUI text="With Icon Left" startIcon={<FaUser />} />
                    <ButtonUI text="With Icon Right" endIcon={<FaArrowRight />} />
                    <ButtonUI shape="circle" size="lg" color="danger" startIcon={<FaCheckCircle />} />
                    <ButtonUI text="Solid Black Text" color="primary" textColor="dark" />
                    <ButtonUI
                        text="Outlined"
                        variant="outlined"
                        color="success"
                        textColor="primary"
                        hoverTextColor="danger"
                    />
                </div>
            </Drawer>
        </header>
    );
};

export default Header;