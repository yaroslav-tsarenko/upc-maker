"use client"

import React, { useState } from 'react';
import styles from './Dashboard.module.scss';
import ManualGenerator from "@/components/widgets/manual-generator/ManualGenerator";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import { useI18n } from "@/context/i18nContext";
import QRGenerator from "@/components/widgets/qr-generator/QRGenerator";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import { useUser } from "@/context/UserContext";
import Transactions from "@/components/widgets/transactions/Transactions";

const translations = {
    en: {
        generateQr: "Generate QR Code",
        myOrders: "My Orders",
        myTransactions: "My Transactions",
    },
    tr: {
        generateQr: "QR Kod Oluştur",
        myOrders: "Siparişlerim",
        myTransactions: "İşlemlerim",
    }
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<'qr' | 'orders' | 'transactions'>('qr');
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;
    const user = useUser();

    const handleTabChange = (_event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
        if (typeof newValue === "string") {
            setActiveTab(newValue as 'qr' | 'orders' | 'transactions');
        }
    };

    return (
        <div className={styles.wrapper}>
            {user && (
                <Card variant="soft" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={user.avatar} alt={user.name} size="lg" />
                    <div>
                        <Typography level="h4">{user.name}</Typography>
                        <Typography level="body-sm" color="neutral">{user.email}</Typography>
                    </div>
                </Card>
            )}
            <div className={styles.header}>
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <TabList>
                        <Tab value="qr">{t.generateQr}</Tab>
                        <Tab value="orders">{t.myOrders}</Tab>
                        <Tab value="transactions">{t.myTransactions}</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div className={styles.widgets}>
                {activeTab === 'qr' && <QRGenerator />}
                {activeTab === 'orders' && <AllOrders />}
                {activeTab === 'transactions' && <Transactions />}
            </div>
        </div>
    );
};

export default Dashboard;
