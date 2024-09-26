import removeIcon from "../../assets/icons/trash_icon.svg";

function CartItem({ id, name, price, image }) {
  return (
    <article>
      <img src={image} alt="prod image" />
      <h3>{name}</h3>
      <p>Price</p>
      <p>{price}</p>
      <img src={removeIcon} alt="remove icon" />
    </article>
  );
}

export default CartItem;
