"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import { appColors } from "@/resources/styles-config";

type ButtonUIProps = {
    variant?: "solid" | "outlined" | "soft" | "plain";
    shape?: "default" | "rounded" | "circle";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    color?: keyof typeof appColors | string;
    hoverColor?: keyof typeof appColors | string;
    textColor?: keyof typeof appColors | string;
    hoverTextColor?: keyof typeof appColors | string;
    text?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
};

const hexToRgba = (hex: string, alpha = 1) => {
    if (!hex) return `rgba(0,0,0,${alpha})`;
    if (hex.startsWith("rgba") || hex.startsWith("rgb")) return hex;
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((ch) => ch + ch).join("");
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ButtonUI: React.FC<ButtonUIProps> = ({
                                               variant = "solid",
                                               shape = "default",
                                               size = "md",
                                               fullWidth = false,
                                               color = "primary",
                                               hoverColor,
                                               textColor,
                                               hoverTextColor,
                                               text,
                                               startIcon,
                                               endIcon,
                                               onClick,
                                           }) => {
    const resolvedBase =
        appColors[color as keyof typeof appColors] || (color as string);

    const resolvedHover =
        (hoverColor &&
            (appColors[hoverColor as keyof typeof appColors] ||
                (hoverColor as string))) ||
        resolvedBase;

    const resolvedText =
        (textColor &&
            (appColors[textColor as keyof typeof appColors] ||
                (textColor as string))) ||
        undefined;

    const resolvedHoverText =
        (hoverTextColor &&
            (appColors[hoverTextColor as keyof typeof appColors] ||
                (hoverTextColor as string))) ||
        resolvedText;

    const circleSizes: Record<"sm" | "md" | "lg", number> = {
        sm: 32,
        md: 40,
        lg: 56,
    };
    const isCircle = shape === "circle";
    const side = circleSizes[size];

    const byVariant =
        variant === "outlined"
            ? {
                color: resolvedText || resolvedBase,
                borderColor: resolvedBase,
                bgcolor: "transparent",
                "&:hover": {
                    color: resolvedHoverText || resolvedHover,
                    borderColor: resolvedHover,
                    bgcolor: hexToRgba(resolvedHover, 0.08),
                },
            }
            : variant === "soft"
                ? {
                    color: resolvedText || "#fff",
                    bgcolor: hexToRgba(resolvedBase, 0.85),
                    "&:hover": {
                        color: resolvedHoverText || "#fff",
                        bgcolor: hexToRgba(resolvedHover, 1),
                    },
                }
                : variant === "plain"
                    ? {
                        color: resolvedText || resolvedBase,
                        bgcolor: "transparent",
                        "&:hover": {
                            color: resolvedHoverText || resolvedHover,
                            bgcolor: hexToRgba(resolvedHover, 0.12),
                        },
                    }
                    : {
                        // solid
                        color: resolvedText || "#fff",
                        bgcolor: resolvedBase,
                        "&:hover": {
                            color: resolvedHoverText || "#fff",
                            bgcolor: resolvedHover,
                        },
                    };

    return (
        <Button
            variant={variant}
            size={size}
            fullWidth={isCircle ? false : fullWidth}
            startDecorator={startIcon}
            endDecorator={endIcon}
            onClick={onClick}
            sx={{
                borderRadius: isCircle ? "50%" : shape === "rounded" ? "30px" : "8px",
                ...(isCircle && {
                    width: side,
                    height: side,
                    minWidth: side,
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    flex: "0 0 auto",
                    alignSelf: "center",
                    "--Button-gap": "0px",
                }),
                fontFamily: "var(--app-font, 'Roboto', sans-serif)",
                ...byVariant,
            }}
        >
            {isCircle ? null : text}
        </Button>
    );
};

export default ButtonUI;
