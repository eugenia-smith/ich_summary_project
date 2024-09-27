import removeIcon from "../../assets/icons/trash_icon.svg";

function CartItem({ id, name, price, image, icon, styles }) {
  return (
    <article style={styles}>
      <img src={image} alt="prod image" />
      <h3>{name}</h3>
      <p>Price</p>
      <p>{price}</p>
      <img src={icon} alt="remove icon" />
    </article>
  );
}

export default CartItem;
