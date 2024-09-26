import styles from "./styles.module.css";
import mainBanner from "../../assets/images/main_banner_full.png";

function Main() {
  return (
    <main className={styles.main_container}>
      <picture className={styles.main_banner}>
        <img src={mainBanner} alt="" />
      </picture>
      <section className={styles.catalogue_section}>
        <h2 className={styles.section_heading}>Catalogue</h2>
        <hr />
        <ul className={styles.catalogue_list}></ul>
      </section>
    </main>
  );
}

export default Main;
