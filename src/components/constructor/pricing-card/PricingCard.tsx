"use client";

import React, { useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input"; // 🔹 Joy Input

interface PricingCardProps {
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "basic",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const [customTokens, setCustomTokens] = useState(10);

    const calcPrice = (t: number) => ((t * 19) / 5).toFixed(2);

    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to buy tokens", "info");
            setTimeout(() => {
                window.location.href = "/sign-up";
            }, 2000);
            return;
        }
        try {
            const amount = price === "dynamic" ? customTokens : tokens;

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ amount }),
            });

            if (!res.ok) throw new Error("Failed to buy tokens");

            const data = await res.json();
            showAlert(`Success!`, `You purchased ${amount} tokens.`, "success");
            console.log("Updated user:", data.user);
        } catch (err: any) {
            showAlert("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            {variant === "highlight" && (
                <div className={styles.bestChoiceLabel}>⭐ Best Choice</div>
            )}
            <h3 className={styles.title}>{title}</h3>

            {price === "dynamic" ? (
                <>
                    <Input
                        type="number"
                        value={customTokens}
                        onChange={(e) => setCustomTokens(Number(e.target.value))}
                        slotProps={{ input: { min: 1 } }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder="Enter tokens"
                        variant="outlined"
                        size="lg"
                    />
                    <p className={styles.price}>
                        ${calcPrice(customTokens)}{" "}
                        <span className={styles.tokens}>/{customTokens} tokens</span>
                    </p>
                </>
            ) : (
                <p className={styles.price}>
                    {price} <span className={styles.tokens}>/{tokens} tokens</span>
                </p>
            )}

            <p className={styles.description}>{description}</p>
            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>
            <ButtonUI type="button" sx={{ width: "100%" }} onClick={handleBuy}>
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;
