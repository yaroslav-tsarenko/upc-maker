import React from "react";
import { Form } from "formik";
import styles from "./FormUI.module.scss";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";

interface FieldConfig {
    name: string;
    type: string;
    placeholder?: string;
}

interface FormUIProps {
    title: string;
    description?: string;
    isSubmitting?: boolean;
    fields?: FieldConfig[];
    submitLabel?: string;
    extraContent?: React.ReactNode; // ← нове
    isSubmitDisabled?: boolean; // ← нове
}

const FormUI: React.FC<FormUIProps> = ({
                                           title,
                                           description,
                                           isSubmitting,
                                           fields = [],
                                           submitLabel = "Submit",
                                           extraContent,
                                           isSubmitDisabled
                                       }) => (
    <div className={styles.wrapper}>
        <div className={styles.formContainer}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}

            <Form className={styles.formContent}>

                {fields.map((field) => (
                    <InputUI
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        formik
                    />
                ))}

                {/* New: checkbox block */}
                {extraContent}

                <ButtonUI
                    type="submit"
                    color="secondary"
                    disabled={isSubmitDisabled}
                    loading={isSubmitting}
                    text={submitLabel}
                    fullWidth
                />
            </Form>
        </div>
    </div>
);

export default FormUI;
