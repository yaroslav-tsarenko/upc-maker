"use client";

import React from "react";
import { useAllOrders } from "@/context/AllOrdersContext";
import { useI18n } from "@/context/i18nContext";
import styles from "./AllOrders.module.scss";

const translations = {
    en: {
        title: "Your Orders",
        empty: "No orders yet.",
        charge: (amount: number) => `-${amount} tokens`,
    },
    tr: {
        title: "Siparişleriniz",
        empty: "Henüz sipariş yok.",
        charge: (amount: number) => `-${amount} jeton`,
    },
};

const TOKEN_AMOUNT = 30; // adjust if dynamic

const OrdersSection: React.FC = () => {
    const { orders } = useAllOrders();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }) + " " + date.toLocaleTimeString(lang === "tr" ? "tr-TR" : "en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatId = (id: string) => id.slice(-6);

    return (
        <div className={styles.ordersSection}>
            <h3 className={styles.title}>{t.title}</h3>
            {orders.length === 0 ? (
                <p className={styles.empty}>{t.empty}</p>
            ) : (
                <ul className={styles.orderList}>
                    {orders.map((order) => (
                        <li key={order._id} className={styles.orderCard}>
                            <div className={styles.orderHeader}>
                                <span className={styles.orderId}>#{formatId(order._id)}</span>
                                <span className={styles.charge}>{t.charge(TOKEN_AMOUNT)}</span>
                            </div>
                            <p className={styles.email}>{order.email}</p>
                            <p className={styles.date}>{formatDate(order.createdAt)}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersSection;
