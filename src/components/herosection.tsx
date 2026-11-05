"use client";
import Carousel from "react-bootstrap/Carousel";
import styles from "./herosection.module.css";

interface Slide {
  name: string;
  description: string;
  price: string;
  image: string;
  background: string;
}

const slides: Slide[] = [
  {
    name: "Diamond Lock",
    description:
      "Dl coyy",
    price: "Rp 800",
    image: "/images/items/diamond-lock.png",
    background: "linear-gradient(135deg, #5ec8f2, #1f8fd6)",
  },
  {
    name: "Blue Gem Lock",
    description:
      "Yang penting BGL dulu boss",
    price: "Rp 80.000",
    image: "/images/items/blue-gem-lock.png",
    background: "linear-gradient(135deg, #4fa3f7, #2b4fd1)",
  },
  {
    name: "World Lock",
    description:
      "Gaada harganya",
    price: "Rp 8",
    image: "/images/items/world-lock.jpg",
    background: "linear-gradient(135deg, #38b6ff, #0d4f86)",
  },
];

const HeroSection = () => {
  return (
    <section id="beranda" className={styles.hero}>
      <Carousel interval={4000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.name}>
            <div className={styles.slide} style={{ background: slide.background }}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <span className={styles.badge}>Item Unggulan</span>
                  <h1 className={styles.title}>{slide.name}</h1>
                  <p className={styles.description}>{slide.description}</p>
                  <p className={styles.price}>{slide.price}</p>
                  <a href="#produk" className={styles.button}>
                    Lihat Produk
                  </a>
                </div>

                <div className={styles.imageBox}>
                  <img src={slide.image} alt={slide.name} className={styles.image} />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
