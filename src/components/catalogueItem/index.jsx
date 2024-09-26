import styles from "./styles.module.css";

function CatalogueItem({ id, name, price, image }) {
  return (
    <article className={styles.item_container}>
      <picture className={styles.item_image}>
        <img src={image} alt="" />
      </picture>
      <p className={styles.item_description}>{name}</p>
      <div className={styles.item_footer}>
        <div className={styles.price_container}>
          <p>Price</p>
          <p>
            {price} <span>&#8364;</span>
          </p>
        </div>
        <button className={styles.add_button} type="button"></button>
      </div>
    </article>
  );
}

export default CatalogueItem;
