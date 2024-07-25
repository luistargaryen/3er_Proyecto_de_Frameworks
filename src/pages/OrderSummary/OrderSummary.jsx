import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./OrderSummary.css";
import {  product_list } from "../../assets/assets";

export const OrderSummary = () => {
  const { cartItems, food_list, getCartTotal } = useContext(StoreContext);

  return (
    <div className="order-summary">
      <h1>Thanks for your purchase!</h1>
      <div className="order-summary-items">
        {product_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="order-summary-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {cartItems[item._id]}</p>
                  <p>Price: ${item.price * cartItems[item._id]}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="order-summary-total">
        <h2>Total</h2>
        <p>${getCartTotal() + 3}</p>
      </div>
      
    </div>
  );
};
