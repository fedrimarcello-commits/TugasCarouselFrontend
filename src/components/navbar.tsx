"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const menus = [
  { label: "Beranda", id: "beranda" },
  { label: "Produk", id: "produk" },
  { label: "Keunggulan", id: "keunggulan" },
  { label: "Kontak", id: "kontak" },
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("beranda");
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick(id: string) {
    setActiveMenu(id);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      let current = "beranda";

      menus.forEach((menu) => {
        const section = document.getElementById(menu.id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = menu.id;
        }
      });

      setActiveMenu(current);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#beranda" className={styles.logo}>
          Grow<span>Store</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Buka menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}>
          {menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={"#" + menu.id}
                className={
                  activeMenu === menu.id
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
                onClick={() => handleMenuClick(menu.id)}
              >
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
