import React from "react";
import styles from "./Hero.module.scss";
import clsx from "clsx";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { media as mediaMap } from "@/resources/media";

export interface HeroButton {
    text: string;
    link: string;
    color?: "primary" | "secondary" | "tertiary";
}

export interface HeroProps {
    bgImage?: string | number;
    title?: string;
    description?: string;
    buttons?: HeroButton[];
}

function resolveMedia(key?: string | number) {
    if (key === undefined || key === null) return undefined;
    return (mediaMap as Record<string, unknown>)[String(key)] as string | undefined;
}

const Hero: React.FC<HeroProps> = ({ bgImage, title, description, buttons = [] }) => {
    const bgUrl = resolveMedia(bgImage);

    return (
        <section
            className={styles.hero}
            style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
        >
            <div className={styles.content}>
                {title && <h1 className={styles.title}>{title}</h1>}
                {description && <p className={styles.description}>{description}</p>}
                <div className={styles.buttonGroup}>
                    {buttons.slice(0, 2).map((btn, idx) => (
                        <ButtonUI
                            key={idx}
                            color={btn.color || "primary"}
                            href={btn.link}
                            sx={{ marginRight: idx === 0 && buttons.length > 1 ? 16 : 0 }}
                        >
                            {btn.text}
                        </ButtonUI>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
