"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input, Textarea } from "@mui/joy";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Confetti from "react-confetti";
import styles from "./ContactUsForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";
import { useI18n } from "@/context/i18nContext";

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
        <div className={styles.contactUsWrapper}>
            {showConfetti && <Confetti />}
            <div className={styles.contactForm}>
                <div className={styles.formTitle}>{t.formTitle}</div>
                <div className={styles.formDesc}>{t.formDesc}</div>
                {successMsg ? (
                    <div style={{ color: "#2e7d32", fontWeight: 600, textAlign: "center", fontSize: "1.2rem", minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {successMsg}
                    </div>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className={styles.form}>
                                <div className={styles.formGroupRow}>
                                    <div className={styles.formGroup}>
                                        <Field name="name">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder={t.firstName}
                                                    error={touched.name && !!errors.name}
                                                />
                                            )}
                                        </Field>
                                        {touched.name && errors.name && (
                                            <div className={styles.error}>{errors.name}</div>
                                        )}
                                    </div>
                                    <div className={styles.formGroup}>
                                        <Field name="secondName">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder={t.secondName}
                                                    error={touched.secondName && !!errors.secondName}
                                                />
                                            )}
                                        </Field>
                                        {touched.secondName && errors.secondName && (
                                            <div className={styles.error}>{errors.secondName}</div>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <Field name="email">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                placeholder={t.email}
                                                type="email"
                                                error={touched.email && !!errors.email}
                                            />
                                        )}
                                    </Field>
                                    {touched.email && errors.email && (
                                        <div className={styles.error}>{errors.email}</div>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <Field name="phone">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                placeholder={t.phone}
                                                type="tel"
                                                error={touched.phone && !!errors.phone}
                                            />
                                        )}
                                    </Field>
                                    {touched.phone && errors.phone && (
                                        <div className={styles.error}>{errors.phone}</div>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <Field name="message">
                                        {({ field }: { field: React.TextareaHTMLAttributes<HTMLTextAreaElement> }) => (
                                            <Textarea
                                                {...field}
                                                placeholder={t.message}
                                                minRows={3}
                                            />
                                        )}
                                    </Field>
                                </div>
                                <ButtonUI
                                    type="submit"
                                    fullWidth
                                    loading={isSubmitting}
                                    text={t.send}
                                    sx={{ mt: 2 }}
                                />
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </div>
    );
};

export default ContactUsForm;
