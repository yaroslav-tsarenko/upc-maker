"use client";

import React, { useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";

import {
    cardVariants,
    hoverEffects,
    CardVariant,
} from "@/resources/styles-config";

interface PricingCardProps {
    variant?: CardVariant;
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

    const config = cardVariants[variant];
    const hover = hoverEffects[config.hover];

    const calcPrice = (t: number) => ((t * 19) / 5).toFixed(2);

    const handleBuy = async () => {
        if (!user) {
            showAlert(
                "Please sign up",
                "You need to be signed in to buy tokens",
                "info"
            );
            setTimeout(() => (window.location.href = "/sign-up"), 2000);
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
            showAlert("Success!", `You purchased ${amount} tokens.`, "success");
            console.log("Updated user:", data.user);
        } catch (err: any) {
            showAlert("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <div
            className={styles.card}
            style={{
                border: config.border,
                background: config.background,
                transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = hover.transform;
                (e.currentTarget as HTMLElement).style.boxShadow = hover.shadow;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 16px rgba(0,0,0,0.08)";
            }}
        >
            {config.label && (
                <div
                    className={styles.bestChoiceLabel}
                    style={{
                        background: config.label.bg,
                        color: config.label.color,
                    }}
                >
                    {config.label.text}
                </div>
            )}

            <h3 className={styles.title}>{title}</h3>

            <div className={styles.content}>
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
                            ${calcPrice(customTokens)}
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
            </div>

            <ButtonUI type="button" sx={{ width: "100%" }} onClick={handleBuy}>
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>

    );
};

export default PricingCard;
