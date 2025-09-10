"use client"

import React, {useState} from "react";
import {headerContent} from "@/resources/content";
import styles from "./Header.module.scss";
import {Drawer, IconButton, Box, Button} from "@mui/material";
import {FaBars} from "react-icons/fa";
import {useUser} from "@/context/UserContext";
import Image from "next/image";
import AuthButtons from "@/components/widgets/auth-buttons/AuthButtons";

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const user = useUser();

    return (
        <header className={styles.header}>
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
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
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
            </Drawer>
        </header>
    );
};

export default Header;