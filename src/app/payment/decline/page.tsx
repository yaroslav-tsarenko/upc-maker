import styles from "../payment-status.module.scss";

export default function Decline() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={`${styles.icon} ${styles.decline}`}>✕</div>
                <h1 className={styles.title}>Payment failed</h1>
                <p className={styles.text}>
                    Unfortunately, the payment was declined.<br />
                    Please try again or use another card.
                </p>
                <a href="/pricing" className={styles.button}>
                    Try again
                </a>
            </div>
        </div>
    );
}
