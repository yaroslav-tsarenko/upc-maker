"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
