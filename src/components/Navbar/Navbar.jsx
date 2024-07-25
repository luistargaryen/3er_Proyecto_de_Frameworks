import { useContext, useState } from "react";
import { assets } from "../../assets/assets";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("menu");

  const {getCartTotal} = useContext(StoreContext);

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </Link>
      </ul>
      <div className="navbar-right">
        <button onClick={() => setShowLogin(true)}>sign in</button>
        <Link to='/cart' className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className={getCartTotal() === 0 ? '' : 'dot'}></div>
        </Link>
      </div>
    </div>
  );
};
