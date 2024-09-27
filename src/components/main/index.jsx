import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import mainBanner from "../../assets/images/main_banner_full.png";
import CatalogueItem from "../catalogueItem";
import Cart from "../cart";
import addIcon from "../../assets/icons/add_to_cart_icon.svg";

function Main() {
  // const [catalogue, setCatalogue] = useState([]);

  // useEffect(() => {
  //   getCatalogueItems();
  // }, []);

  // async function getCatalogueItems() {
  //   const response = await axios.get(
  //     "https://66f3c87377b5e8897096cebb.mockapi.io/productData"
  //   );
  //   setCatalogue(response.data);
  // }

  const stylesData = {
    container: {},
    item: {},
  };

  return (
    <main className={styles.main_container}>
      <picture className={styles.main_banner}>
        <img src={mainBanner} alt="" />
      </picture>
      <section className={styles.catalogue_section}>
        <h2 className={styles.section_heading}>Catalogue</h2>
        <ul className={styles.catalogue_list}>
          {/* {catalogue.map((elem) => {
            return (
              <li>
                <CatalogueItem key={elem.id} {...elem} />
              </li>
            );
          })} */}
          <Cart
            path="productData"
            icon={addIcon}
            stylesData={stylesData}
            title="Товары"
          />
        </ul>
      </section>
    </main>
  );
}

export default Main;
