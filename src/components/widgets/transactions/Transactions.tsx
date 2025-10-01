// src/components/widgets/transactions/Transactions.tsx
"use client";
import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTransactions } from "@/context/TransactionContext";
import styles from "./Transactions.module.scss";

const Transactions: React.FC = () => {
    const { transactions, loading } = useTransactions();

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    };

    return (
        <div className={styles.root}>
            <div className={styles.title}>My Transactions</div>
            {loading ? (
                <div className={styles.loading}>Loading...</div>
            ) : transactions.length === 0 ? (
                <div className={styles.empty}>No transactions yet.</div>
            ) : (
                <div className={styles.grid}>
                    {transactions.map((tx) => (
                        <div key={tx._id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardInfo}>
                                    <div className={styles.avatar}>
                                        {tx.type === "add" ? (
                                            <AddIcon fontSize="small" />
                                        ) : (
                                            <RemoveIcon fontSize="small" />
                                        )}
                                    </div>
                                    <span className={styles.label}>
                                        {tx.type === "add" ? "Add Funds" : "Spent"}
                                    </span>
                                </div>
                                <span className={`${styles.chip} ${tx.type === "add" ? "add" : "spend"}`}>
                                    {tx.type === "add" ? "+" : "-"}
                                    {tx.amount} tokens
                                </span>
                            </div>
                            <div className={styles.email}>{tx.email}</div>
                            <div className={styles.date}>{formatDate(tx.createdAt)}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Transactions;
