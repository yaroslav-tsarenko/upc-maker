import * as React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";

const ButtonUI: React.FC<ButtonProps> = (props) => {
    return <Button {...props} />;
};

export default ButtonUI;