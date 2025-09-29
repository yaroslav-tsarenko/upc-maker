"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LangCode = "en" | "tr";

type I18nContextType = {
    lang: LangCode;
    setLang: (l: LangCode) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [lang, setLangState] = useState<LangCode>("tr");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("lang") as LangCode | null;
            if (saved === "tr" || saved === "en") {
                setLangState(saved);
                return;
            }
            const browser = (navigator.language || "").toLowerCase();
            if (browser.startsWith("en")) {
                setLangState("en");
            } else {
                setLangState("tr");
            }
        } catch {
            setLangState("tr");
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem("lang", lang);
        } catch {}
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    const setLang = (l: LangCode) => setLangState(l);

    const value = useMemo(() => ({ lang, setLang }), [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
    return ctx;
};