import styles from "../payment-status.module.scss";

export default function Pending() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={`${styles.icon} ${styles.pending}`}>⏳</div>
                <h1 className={styles.title}>Payment pending</h1>
                <p className={styles.text}>
                    We are waiting for payment confirmation.<br />
                    This may take a few minutes.
                </p>
                <a href="/pricing" className={styles.button}>
                    Back to pricing
                </a>
            </div>
        </div>
    );
}
