"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Card, CardContent, Typography, Box } from "@mui/material";
import Confetti from "react-confetti";
import styles from "./ContactUsForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { useI18n } from "@/context/i18nContext";
import ButtonUI from "@/components/ui/button/ButtonUI";

const translations = {
    en: {
        formTitle: "Contact Us",
        formDesc: "Fill out the form below and we’ll get back to you as soon as possible.",
        firstName: "First Name",
        secondName: "Second Name",
        email: "Email",
        phone: "Phone Number",
        message: "Message (optional)",
        send: "Send",
        successMsg: "Thanks! Your data sent successfully!",
        successAlertTitle: "Success",
        successAlertMsg: "Your request has been sent!",
        errorAlertTitle: "Error",
        errorAlertMsg: "Failed to send. Please try again.",
    },
    tr: {
        formTitle: "Bize Ulaşın",
        formDesc: "Aşağıdaki formu doldurun, en kısa sürede size geri döneceğiz.",
        firstName: "Ad",
        secondName: "Soyad",
        email: "E-posta",
        phone: "Telefon Numarası",
        message: "Mesaj (isteğe bağlı)",
        send: "Gönder",
        successMsg: "Teşekkürler! Bilgileriniz başarıyla gönderildi!",
        successAlertTitle: "Başarılı",
        successAlertMsg: "Talebiniz gönderildi!",
        errorAlertTitle: "Hata",
        errorAlertMsg: "Gönderilemedi. Lütfen tekrar deneyin.",
    },
};

const ContactUsForm = () => {
    const { showAlert } = useAlert();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg(t.successMsg);
            setShowConfetti(true);
            showAlert(t.successAlertTitle, t.successAlertMsg, "success");
            setTimeout(() => setShowConfetti(false), 1000000);
        } catch {
            showAlert(t.errorAlertTitle, t.errorAlertMsg, "error");
        }
        setSubmitting(false);
    };

    return (
        <Box className={styles.contactUsWrapper} sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {showConfetti && <Confetti />}
            <Card sx={{ maxWidth: 480, width: "100%", boxShadow: 3, borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight={700} mb={1} color="primary">
                        {t.formTitle}
                    </Typography>
                    <Typography variant="body1" mb={3} color="text.secondary">
                        {t.formDesc}
                    </Typography>
                    {successMsg ? (
                        <Box sx={{ color: "#2e7d32", fontWeight: 600, textAlign: "center", fontSize: "1.2rem", minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {successMsg}
                        </Box>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                                        <Field name="name">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.firstName}
                                                    error={touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                        <Field name="secondName">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.secondName}
                                                    error={touched.secondName && !!errors.secondName}
                                                    helperText={touched.secondName && errors.secondName}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="email">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.email}
                                                    type="email"
                                                    error={touched.email && !!errors.email}
                                                    helperText={touched.email && errors.email}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="phone">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.phone}
                                                    type="tel"
                                                    error={touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <Box sx={{ mb: 2 }}>
                                        <Field name="message">
                                            {({ field }: { field: any }) => (
                                                <TextField
                                                    {...field}
                                                    label={t.message}
                                                    multiline
                                                    minRows={3}
                                                    fullWidth
                                                    variant="outlined"
                                                    size="medium"
                                                />
                                            )}
                                        </Field>
                                    </Box>
                                    <ButtonUI
                                        type="submit"
                                        color="primary"
                                        fullWidth
                                        disabled={isSubmitting}
                                    >
                                        {t.send}
                                    </ButtonUI>
                                </Form>
                            )}
                        </Formik>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactUsForm;
