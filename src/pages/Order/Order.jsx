import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";
import { StoreContext } from "../../context/StoreContext";

export const Order = () => {
  const { getCartTotal, cartItems, product_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/order-summary'); // Redirige a la página de resumen de compra
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        {/* Información de entrega (campos de formulario) */}
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="number" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="number" placeholder="Phone" />
      </div>

      <div className="place-order-right">
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
                <p>${3}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getCartTotal() + 3}</b>
              </div>
            </div>
            <button type="button" onClick={handlePayment}>PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};
