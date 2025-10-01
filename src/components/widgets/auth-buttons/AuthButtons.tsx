import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import { MdStars } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAlert } from "@/context/AlertContext";
import {useAuthActions} from "@/utils/logoutClient";


const AuthButtons: React.FC = () => {
    const user = useUser();
    const { logout, logoutAll } = useAuthActions();
    const { showAlert } = useAlert();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        const ok = await logout();
        showAlert(ok ? "Logged out" : "Logout failed", "", ok ? "success" : "error");
        handleMenuClose();
    };
    if (user) {
        return (
            <div className={styles.authedUser}>
                <div className={styles.userInfo} onClick={handleAvatarClick}>
                    <Avatar
                        src={user.name}
                        alt={user.name}
                        className={styles.avatar}
                    />
                    <div className={styles.userDetails}>
                        <span className={styles.userName}>{user.name}</span>
                        <div className={styles.userBalance}>
                            <p className={styles.balanceText}>
                                <MdStars className={styles.tokenIcon} />{user.tokens ?? 0}
                            </p>
                            <Link href="/pricing" className={styles.buyLink}>
                                Buy tokens
                            </Link>
                        </div>
                    </div>
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Link href="/dashboard" className={styles.menuLink}>
                            Go To App
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </Menu>

            </div>
        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI text="Sign In" shape="default" color="linkHover" hoverColor="linkHover" hoverEffect="none"
                          fullWidth/>
            </Link>
            <Link href="/sign-up">
                <ButtonUI text="Sign Up" shape="default" color="secondary" hoverColor="secondary" hoverEffect="none"
                          fullWidth/>
            </Link>
        </div>
    );
};

export default AuthButtons;