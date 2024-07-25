import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import {  product_list } from "../../assets/assets";

export const Cart = () => {
  const { cartItems, food_list, removeFromCart, getCartTotal } = useContext(StoreContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate('/order');
    } else {
      setError("Please log in to proceed with checkout.");
      navigate('/login');
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {product_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>${getCartTotal() === 0 ? 0 : 3}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotal() === 0 ? 0 : getCartTotal() + 3}</b>
            </div>
          </div>
          <button onClick={handleCheckout}>CHECKOUT</button>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};
