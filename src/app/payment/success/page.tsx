import styles from "../payment-status.module.scss";

export default function Success() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={`${styles.icon} ${styles.success}`}>✔</div>
                <h1 className={styles.title}>Payment successful</h1>
                <p className={styles.text}>
                    Your payment has been confirmed.<br />
                    Tokens will be added to your account shortly.
                </p>
                <a href="/dashboard" className={styles.button}>
                    Go to dashboard
                </a>
            </div>
        </div>
    );
}
