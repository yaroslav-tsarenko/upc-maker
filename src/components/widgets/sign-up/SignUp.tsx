"use client";

import { Formik, FormikHelpers } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit
} from "@/validationSchemas/sign-up/schema";
import FormUI from "@/components/ui/form/FormUI";
import { useI18n } from "@/context/i18nContext";

export type SignUpValues = {
    name: string;
    email: string;
    password: string;
    terms: boolean; // ← додано
};

const translations = {
    en: {
        title: "Sign Up",
        description: "Create your account",
        name: "Name",
        email: "Email",
        password: "Password",
        terms: "I read and agree to Terms and Conditions",
        submit: "Sign Up"
    },
    tr: {
        title: "Kayıt Ol",
        description: "Hesabınızı oluşturun",
        name: "İsim",
        email: "E-posta",
        password: "Şifre",
        terms: "Şartlar ve koşulları kabul ediyorum",
        submit: "Kayıt Ol"
    }
};

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    return (
        <Formik<SignUpValues>
            initialValues={{ ...signUpInitialValues, terms: false }}
            validate={(values) => {
                const errors: any = signUpValidation(values);

                if (!values.terms) errors.terms = "You must accept the Terms";

                return errors;
            }}
            onSubmit={async (values, helpers: FormikHelpers<SignUpValues>) =>
                signUpOnSubmit(values, helpers, showAlert, router)
            }
        >
            {(formik) => (
                <FormUI
                    title={t.title}
                    description={t.description}
                    isSubmitting={formik.isSubmitting}
                    fields={[
                        { name: "name", type: "text", placeholder: t.name },
                        { name: "email", type: "email", placeholder: t.email },
                        { name: "password", type: "password", placeholder: t.password }
                    ]}
                    submitLabel={t.submit}
                    /** додаємо чекбокс у FormUI */
                    extraContent={
                        <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "15px" }}>
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formik.values.terms}
                                onChange={() =>
                                    formik.setFieldValue("terms", !formik.values.terms)
                                }
                                style={{ marginTop: "4px" }}
                            />
                            <span style={{ fontSize: "14px", color: "#444" }}>
                                I read and agree to{" "}
                                <a
                                    href="/terms"
                                    target="_blank"
                                    style={{ color: "#1a73e8", textDecoration: "underline" }}
                                >
                                    Terms and Conditions
                                </a>
                            </span>
                        </label>
                    }
                    isSubmitDisabled={!formik.values.terms || formik.isSubmitting}
                />
            )}
        </Formik>
    );
}
