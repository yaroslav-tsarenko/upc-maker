import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {LogoutButton} from "@/components/widgets/logout-button/LogoutButton";
import { FaCoins } from "react-icons/fa";

const AuthButtons: React.FC = () => {
    const user = useUser();
    if (user) {
        return (
            <div className={styles.authedUser}>
                <div className={styles.userBalance}>
                    <p className={styles.balanceText}>
                         Balance: {user.tokens ?? 0}<FaCoins className={styles.tokenIcon}/>
                    </p>
                    <Link href="/pricing" className={styles.buyLink}>
                        Buy tokens
                    </Link>
                </div>
                <Link href="/dashboard" className={styles.link}>
                    <ButtonUI text="Go To App" shape="rounded" sx={{width: "100%"}} />
                </Link>
                <LogoutButton />
            </div>
        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI text="Sign In" shape="rounded" color="linkHover" hoverColor="hover" hoverEffect="none"
                          fullWidth/>
            </Link>
            <Link href="/sign-up">
                <ButtonUI text="Sign Up" shape="rounded" color="secondary" hoverColor="muted" hoverEffect="none"
                          fullWidth/>
            </Link>
        </div>
    );
};

export default AuthButtons;