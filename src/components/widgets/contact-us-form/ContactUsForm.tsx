"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Box, Typography, Input, Textarea, Button, Card } from "@mui/joy";
import Confetti from "react-confetti";
import styles from "./ContactUsForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { useI18n } from "@/context/i18nContext";

const translations = {
    en: {
        formTitle: "Get in Touch ✨",
        formDesc: "We’d love to hear from you. Fill in your details and our team will get back shortly.",
        firstName: "First Name",
        secondName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        send: "Send Message",
        successMsg: "✅ Thanks! Your message has been sent successfully!",
        successAlertTitle: "Success",
        successAlertMsg: "Your request has been sent!",
        errorAlertTitle: "Error",
        errorAlertMsg: "Failed to send. Please try again.",
    },
    tr: {
        formTitle: "Bizimle İletişime Geçin ✨",
        formDesc: "Bilgilerinizi doldurun, en kısa sürede size ulaşalım.",
        firstName: "Ad",
        secondName: "Soyad",
        email: "E-posta",
        phone: "Telefon Numarası",
        message: "Mesajınız",
        send: "Mesaj Gönder",
        successMsg: "✅ Teşekkürler! Mesajınız başarıyla gönderildi!",
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
            setTimeout(() => setShowConfetti(false), 4000);
        } catch {
            showAlert(t.errorAlertTitle, t.errorAlertMsg, "error");
        }
        setSubmitting(false);
    };

    return (
        <div className={styles.contactWrapper}>
            {showConfetti && <Confetti />}
            <Card className={styles.contactCard}>
                {successMsg ? (
                    <div className={styles.successMsg}>{successMsg}</div>
                ) : (
                    <>
                        <Typography level="h2" className={styles.formTitle}>
                            {t.formTitle}
                        </Typography>
                        <Typography level="body-md" className={styles.formDesc}>
                            {t.formDesc}
                        </Typography>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form className={styles.form}>
                                    <div className={styles.formGroupRow}>
                                        <Field name="name">
                                            {({ field }: { field: any }) => (
                                                <Input
                                                    {...field}
                                                    placeholder={t.firstName}
                                                    className={styles.input}
                                                    error={touched.name && !!errors.name}
                                                />
                                            )}
                                        </Field>
                                        <Field name="secondName">
                                            {({ field }: { field: any }) => (
                                                <Input
                                                    {...field}
                                                    placeholder={t.secondName}
                                                    className={styles.input}
                                                    error={touched.secondName && !!errors.secondName}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <Field name="email">
                                        {({ field }: { field: any }) => (
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder={t.email}
                                                className={styles.input}
                                                error={touched.email && !!errors.email}
                                            />
                                        )}
                                    </Field>
                                    <Field name="phone">
                                        {({ field }: { field: any }) => (
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder={t.phone}
                                                className={styles.input}
                                                error={touched.phone && !!errors.phone}
                                            />
                                        )}
                                    </Field>
                                    <Field name="message">
                                        {({ field }: { field: any }) => (
                                            <Textarea
                                                {...field}
                                                minRows={4}
                                                placeholder={t.message}
                                                className={styles.textarea}
                                            />
                                        )}
                                    </Field>
                                    <Button
                                        type="submit"
                                        loading={isSubmitting}
                                        className={styles.submitBtn}
                                    >
                                        {t.send}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </>
                )}
            </Card>
        </div>
    );
};

export default ContactUsForm;
