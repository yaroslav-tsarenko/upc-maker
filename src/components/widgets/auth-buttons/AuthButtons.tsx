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
                    <ButtonUI text="Rounded" shape="rounded" />
                </Link>
                <LogoutButton/>
            </div>

        );
    }

    return (
        <div className={styles.nonAuthedButtons}>
            <Link  href="/sign-in">
                <ButtonUI text="Sign In" shape="rounded" color="dark" hoverColor="buttonHover" fullWidth/>
            </Link>
            <Link  href="/sign-up">
                <ButtonUI text="Sign Up" shape="rounded" color="danger" fullWidth/>
            </Link>
        </div>
    );
};

export default AuthButtons;