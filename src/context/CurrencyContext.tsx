"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Currency = "GBP" | "USD" | "EUR";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
    rates: Record<Currency, number>;
    loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
    return ctx;
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>("GBP");
    const [rates, setRates] = useState<Record<Currency, number>>({
        GBP: 1,
        USD: 1.25,
        EUR: 1.17,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRates = async () => {
            try {
                const res = await fetch("https://api.frankfurter.app/latest?from=GBP");
                const data = await res.json();

                setRates({
                    GBP: 1,
                    USD: data.rates.USD,
                    EUR: data.rates.EUR
                });
            } catch (e) {
                console.error("Failed to load rates", e);
            } finally {
                setLoading(false);
            }
        };

        loadRates();
    }, []);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, rates, loading }}>
            {children}
        </CurrencyContext.Provider>
    );
};
