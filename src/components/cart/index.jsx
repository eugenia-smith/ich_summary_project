import CartItem from "../cartItem";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Cart({ path, icon, stylesData, title }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  async function getCartItems() {
    try {
      const response = await axios.get(
        `https://66f3c87377b5e8897096cebb.mockapi.io/${path}`
      );

      setCartList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      {cartList.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <div>
          {cartList.map((elem) => {
            return (
              <CartItem
                key={elem.id}
                {...elem}
                icon={icon}
                styles={stylesData.item}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Cart;
