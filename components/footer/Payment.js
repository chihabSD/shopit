import styles from "./styles.module.scss";

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../images/visa.png" alt="" />
        <img src="../../../images/mastercard.png" alt="" />
        <img src="../../../images/paypal.png" alt="" />
      </div>
    </div>
  );
}