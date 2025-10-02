"use client";
import React from "react";
import styles from "./Steps.module.scss";
import { ICON_MAP } from "@/components/constructor/text/Text";

export interface StepItem {
    number: number;
    title: string;
    description?: string;
    iconName?: keyof typeof ICON_MAP;
}

export interface StepsProps {
    title?: string;
    items: StepItem[];
}

const Steps: React.FC<StepsProps> = ({ title, items }) => {
    return (
        <section className={styles.steps}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.list}>
                {items.map((s, idx) => {
                    const Icon = s.iconName ? ICON_MAP[s.iconName] : undefined;
                    return (
                        <div key={idx} className={styles.item}>
                            <div className={styles.number}>
                                {Icon ? <Icon size={28} color="#fff" /> : s.number}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{s.title}</h3>
                                {s.description && (
                                    <p className={styles.desc}>{s.description}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Steps;
