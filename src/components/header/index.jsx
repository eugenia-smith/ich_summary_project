import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.page_header}>
      <nav className={styles.main_nav}>
        <p className={styles.header_title}>Sneaker - Shop</p>
        <ul className={styles.nav_list}>
          <li className={styles.nav_option}>
            <NavLink to={"/"}>Main</NavLink>
          </li>
          <li className={styles.nav_option}>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li className={styles.nav_option}>
            <NavLink to={"/contactInfo"}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
