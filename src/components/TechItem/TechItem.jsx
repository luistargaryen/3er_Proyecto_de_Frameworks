import { useContext } from "react";
import { assets } from "../../assets/assets";

import { StoreContext } from "../../context/StoreContext";

import "./TechItem.css";

export const TechItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="tech-item">
      <div className="tech-item-img-container">
        <img className="tech-item-img" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="tech-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="tech-item-info">
        <div className="tech-item-name-rating">
          <p>{name}</p>
          <p className="tech-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};
