import styles from "./productsection.module.css";

interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Diamond Lock",
    category: "Lock",
    description: "DL murah cuma disini",
    price: "Rp 800",
    image: "/images/items/diamond-lock.png",
  },
  {
    name: "Blue Gem Lock",
    category: "Lock",
    description: "100 DL",
    price: "Rp 80.000",
    image: "/images/items/blue-gem-lock.png",
  },
  {
    name: "World Lock",
    category: "Lock",
    description: "Murah bangett",
    price: "Rp 8",
    image: "/images/items/world-lock.jpg",
  },
  {
    name: "Rayman Fist",
    category: "Item",
    description: "when yah",
    price: "Rp 16.000.000",
    image: "/images/items/rayman-fist.png",
  },
  {
    name: "Magplant 5000",
    category: "Item",
    description: "Sedot pakai magplant",
    price: "Rp 1.600.000",
    image: "/images/items/magplant.png",
  },
  {
    name: "Gaia's Beacon",
    category: "Item",
    description: "Sama kayak magplant",
    price: "Rp 3.000",
    image: "/images/items/gaia-beacon.png",
  },
  {
    name: "Growscan 9000",
    category: "Item",
    description: "Lihat-Lihat",
    price: "Rp 400.000",
    image: "/images/items/growscan.png",
  },
];

function ProductSection() {
  return (
    <section id="produk" className={styles.section}>
      <h2 className={styles.title}>Daftar Produk</h2>
      <p className={styles.subtitle}>
        Beli dong plis
      </p>

      <div className={styles.list}>
        {products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.imageBox}>
              <img src={product.image} alt={product.name} className={styles.image} />
            </div>

            <span className={styles.category}>{product.category}</span>
            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.bottom}>
              <span className={styles.price}>{product.price}</span>
              <a href="#kontak" className={styles.button}>
                Pesan
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
