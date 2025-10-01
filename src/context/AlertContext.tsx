"use client";

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/joy/Alert';
import { AlertColor } from '@mui/material/Alert';

type ShowAlertFn = (title: string, description?: string, severity?: AlertColor) => void;

interface AlertItem {
    id: number;
    title: string;
    description?: string;
    severity: AlertColor;
}

interface AlertContextType {
    showAlert: ShowAlertFn;
}

export const AlertContext = React.createContext<AlertContextType>({
    showAlert: () => {},
});

export function useAlert() {
    return React.useContext(AlertContext);
}

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [alerts, setAlerts] = React.useState<AlertItem[]>([]);

    const showAlert: ShowAlertFn = (title, description = '', severity = 'info') => {
        setAlerts((prev) => [
            ...prev,
            {
                id: Date.now() + Math.random(),
                title,
                description,
                severity,
            },
        ]);
    };

    const handleClose = (id: number) => (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <div
                style={{
                    position: "fixed",
                    top: 16,
                    right: 16,
                    zIndex: 1400,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    alignItems: "flex-end",
                }}
            >
                {alerts.map((alert) => (
                    <Snackbar
                        key={alert.id}
                        open
                        autoHideDuration={4000}
                        onClose={handleClose(alert.id)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        sx={{ maxWidth: 400 }}
                    >
                        <Alert
                            variant="solid"
                            color={alert.severity}
                            sx={{
                                width: '100%',
                                boxShadow: 3,
                                fontWeight: 'md',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                textAlign: "left",
                            }}
                            onClose={handleClose(alert.id)}
                        >
                            <strong>{alert.title}</strong>
                            {alert.description && <div>{alert.description}</div>}
                        </Alert>
                    </Snackbar>
                ))}
            </div>
        </AlertContext.Provider>
    );
};
