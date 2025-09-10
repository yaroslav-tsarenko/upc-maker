"use client";
import React from "react";
import { useAlert } from "@/context/AlertContext";
import { useAuthActions } from "@/utils/logoutClient";
import ButtonUI from "@/components/ui/button/ButtonUI";

export function LogoutButton({ all = false }: { all?: boolean }) {
    const { logout, logoutAll } = useAuthActions();
    const { showAlert } = useAlert();

    const handleClick = async () => {
        const ok = all ? await logoutAll() : await logout();
        showAlert(ok ? "Logged out" : "Logout failed", "", ok ? "success" : "error");
    };

    return (
        <ButtonUI type="button" onClick={handleClick} color="primary" variant="outlined">
            {all ? "Log out from all devices" : "Log out"}
        </ButtonUI>
    );
}