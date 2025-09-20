"use client";

import React, {useState} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {formSchema, buildPrompt} from "./formSchema";

import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/joy/Checkbox";

import styles from "./ManualGenerator.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {useAlert} from "@/context/AlertContext";
import Input from "@mui/joy/Input";
import {useAllOrders} from "@/context/AllOrdersContext";

const ManualGenerator = () => {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const {showAlert} = useAlert();
    const { orders, refreshOrders } = useAllOrders();
    const [loading, setLoading] = useState(false);
    const buildInitialValues = () => {
        const init: Record<string, any> = {};
        [...formSchema.expectations, ...formSchema.inputs, ...formSchema.advanced].forEach((field) => {
            if (field.type === "checkbox") {
                init[field.name] = false;
            } else {
                init[field.name] = "";
            }
        });
        return init;
    };

    const buildValidationSchema = () => {
        const shape: Record<string, any> = {};
        [...formSchema.expectations, ...formSchema.inputs].forEach((field) => {
            if (field.required) {
                shape[field.name] = Yup.string().required("This field is required");
            }
        });
        return Yup.object().shape(shape);
    };

    const handleSubmit = async (values: Record<string, any>) => {
        const prompt = buildPrompt(values);
        setLoading(true)
        try {
            const res = await fetch("/api/ai/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({prompt}),
            });

            const data = await res.json();

            if (res.ok) {
                showAlert("Thank you!", "Order created, after a few minutes we sent you to your email", "success");
                refreshOrders()
            } else {
                showAlert("Error", data.message || "Failed to generate manual", "error");
            }
        } catch (err) {
            console.error("AI Request Error:", err);
            showAlert("Error", "Something went wrong while generating manual", "error");
        }
        setLoading(false)
    };

    return (
        <Formik
            initialValues={buildInitialValues()}
            validationSchema={buildValidationSchema()}
            onSubmit={handleSubmit}
        >
            {({values, setFieldValue}) => (
                <Form className={styles.form}>
                    {formSchema.expectations.map((field) => (
                        <div key={field.name} className={styles.fullWidth}>
                            <label className={styles.label}>{field.label}</label>
                            {field.description && <p className={styles.description}>{field.description}</p>}
                            <Field name={field.name} as={Textarea} minRows={4} placeholder={field.label}/>
                        </div>
                    ))}
                    <div className={styles.selectGrid}>
                        {formSchema.inputs.map((field) => (
                            <div key={field.name} className={styles.formGroup}>
                                <label className={styles.label}>{field.label}</label>
                                {field.description && <p className={styles.description}>{field.description}</p>}
                                <Input
                                    placeholder={field.label}
                                    value={values[field.name] || ""}
                                    onChange={(e) => setFieldValue(field.name, e.target.value)}
                                    required={field.required}
                                    name={field.name}
                                />
                            </div>
                        ))}
                    </div>
                    <ButtonUI
                        type="button"
                        variant="outlined"
                        hoverTextColor="white"
                        color="neutral"
                        onClick={() => setShowAdvanced((prev) => !prev)}
                    >
                        {showAdvanced ? "Hide Advanced Options" : "Show Advanced Options"}
                    </ButtonUI>
                    {showAdvanced && (
                        <div className={styles.checkboxGrid}>
                            {formSchema.advanced.map((field) => (
                                <div key={field.name} className={styles.checkboxItem}>
                                    <Checkbox
                                        label={field.label}
                                        checked={values[field.name]}
                                        onChange={(e) => setFieldValue(field.name, e.target.checked)}
                                    />
                                    {field.description && <p className={styles.description}>{field.description}</p>}
                                </div>
                            ))}
                        </div>
                    )}
                    <ButtonUI type="submit" color="primary" loading={loading}>
                        Get Manual
                    </ButtonUI>
                </Form>
            )}
        </Formik>
    );
};

export default ManualGenerator;
