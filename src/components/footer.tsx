import styles from "./footer.module.css";

function Footer() {
  return (
    <footer id="kontak" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logo}>
            Grow<span>Store</span>
          </h3>
          <p className={styles.text}>
            Toko Jual Item Growtopia
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 GrowStore</p>
      </div>
    </footer>
  );
}

export default Footer;
