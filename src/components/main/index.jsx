import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import mainBanner from "../../assets/images/main_banner_full.png";
import CatalogueItem from "../catalogueItem";
import Cart from "../cart";

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
          <Cart url={url} icon={icon} stylesData={stylesData} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
