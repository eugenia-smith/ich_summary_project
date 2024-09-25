import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.page_header}>
      <nav className={styles.main_nav}>
        <p className={styles.header_title}>Sneaker - Shop</p>
        <ul className={styles.nav_list}>
          <li className={styles.nav_option}>Main</li>
          <li className={styles.nav_option}>Cart</li>
          <li className={styles.nav_option}>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
