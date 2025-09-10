import React from "react";
import { useUser } from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {LogoutButton} from "@/components/widgets/logout-button/LogoutButton";

const AuthButtons: React.FC = () => {
    const user = useUser();

    if (user) {
        return (
            <div className={styles.authedUser}>
                <Link href="/dashboard" >
                    <ButtonUI variant="soft" color="primary" sx={{width: "100%"}} >
                        Go to App
                    </ButtonUI>
                </Link>
                <LogoutButton/>
            </div>

        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link  href="/sign-in">
                <ButtonUI variant="outlined" color="primary" sx={{width: "100%"}}>
                    Sign In
                </ButtonUI>
            </Link>
            <Link  href="/sign-up">
                <ButtonUI variant="soft" color="primary" sx={{width: "100%"}}>
                    Sign Up
                </ButtonUI>
            </Link>
        </div>
    );
};

export default AuthButtons;