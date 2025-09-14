import { ButtonColor } from "@/resources/styles-config";

export type ButtonUIProps = {
    variant?: "solid" | "outlined" | "soft" | "plain";
    shape?: "default" | "rounded" | "circle";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    color?: ButtonColor | string;
    hoverColor?: ButtonColor | string;
    textColor?: ButtonColor | string;
    hoverTextColor?: ButtonColor | string;
    text?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
};
