import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "formik";

type FormikInputProps = TextFieldProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        return (
            <>
                <TextField
                    {...field}
                    {...props}
                    error={!!meta.error && meta.touched}
                    helperText={meta.touched && meta.error ? meta.error : props.helperText}
                />
            </>
        );
    }
    return <TextField {...props} />;
};

export default InputUI;
