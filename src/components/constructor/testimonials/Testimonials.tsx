"use client";
import React from "react";
import styles from "./Testimonials.module.scss";

export interface TestimonialItem {
    avatar?: string;
    name: string;
    role?: string;
    text: string;
}

export interface TestimonialsProps {
    title?: string;
    items: TestimonialItem[];
}

const DEFAULT_AVATAR = "https://i.pravatar.cc/150?img=3"; // fallback CDN avatar

const Testimonials: React.FC<TestimonialsProps> = ({ title, items }) => {
    return (
        <section className={styles.testimonials}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.grid}>
                {items.map((t, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.avatarWrapper}>
                            <img
                                src={t.avatar || DEFAULT_AVATAR}
                                alt={t.name}
                                className={styles.avatar}
                            />
                        </div>
                        <blockquote className={styles.text}>“{t.text}”</blockquote>
                        <div className={styles.meta}>
                            <strong className={styles.name}>{t.name}</strong>
                            {t.role && <span className={styles.role}>{t.role}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
