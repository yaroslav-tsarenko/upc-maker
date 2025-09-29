import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import styles from "./Selectors.module.scss";
import { useI18n } from "@/context/i18nContext";
import {useCurrency} from "@/context/CurrencyContext";

const Selectors = () => {
    const { currency, setCurrency } = useCurrency();
    const { lang, setLang } = useI18n();

    const handleLanguageChange = (e: SelectChangeEvent) => {
        const newLang = e.target.value as "en" | "tr";
        setLang(newLang);
    };

    return (
        <div className={styles.selectorsWrapper}>
            <div className={styles.selectorBlock}>
                <ToggleButtonGroup
                    sx={{
                        backgroundColor: "#fff",
                    }}
                    value={currency}
                    exclusive
                    onChange={(_, val) => val && setCurrency(val)}
                    size="small"
                    color="primary"
                    className={styles.toggleGroup}
                >
                    <ToggleButton value="GBP">GBP</ToggleButton>
                    <ToggleButton value="USD">USD</ToggleButton>
                    <ToggleButton value="EUR">EUR</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className={styles.selectorBlock}>
                <Select
                    value={lang}
                    onChange={handleLanguageChange}
                    size="small"
                    className={styles.select}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="tr">Türkçe</MenuItem>
                </Select>
            </div>
        </div>
    );
};

export default Selectors;
