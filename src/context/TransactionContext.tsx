"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface Transaction {
    _id: string;
    userId: string;
    email: string;
    amount: number;
    type: "add" | "spend";
    createdAt: string;
}

interface TransactionsContextType {
    transactions: Transaction[];
    refreshTransactions: () => Promise<void>;
    loading: boolean;
}

const TransactionsContext = createContext<TransactionsContextType>({
    transactions: [],
    refreshTransactions: async () => {},
    loading: false,
});

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/transactions/get-all", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (!res.ok) throw new Error("Failed to fetch transactions");
            const data = await res.json();
            console.log("Your Transactions:", data);
            setTransactions(Array.isArray(data) ? data : []);
        } catch {
            setTransactions([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, refreshTransactions: fetchTransactions, loading }}>
            {children}
        </TransactionsContext.Provider>
    );
};
