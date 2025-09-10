import React, {FC} from 'react';
import styles from "./PageWrapper.module.scss"
import {PageWrapperProps} from "@/components/ui/page-wrapper/types";

const PageWrapper:FC<PageWrapperProps> = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};

export default PageWrapper;