import { appColors } from "@/resources/styles-config";

export type ButtonUIProps = {
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