import styles from "./advantagesection.module.css";

const advantages = [
  {
    title: "Proses Cepat",
    description: "Item langsung dikirim ke world",
  },
  {
    title: "Harga Murah",
    description: "Harga cheap bangett",
  },
  {
    title: "Aman dan Terpercaya",
    description: "Pasti aman bosku",
  },
];

function AdvantageSection() {
  return (
    <section id="keunggulan" className={styles.section}>
      <h2 className={styles.title}>Kenapa disiniini</h2>
      <p className={styles.subtitle}>
        Alasan banyak yang beli disini
      </p>

      <div className={styles.list}>
        {advantages.map((item) => (
          <div key={item.title} className={styles.card}>
            <div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdvantageSection;
