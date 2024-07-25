import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Order } from "./pages/Order/Order";
import { Cart } from "./pages/Cart/Cart";
import { useState } from "react";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";

export const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </div>
    </>
  );
};
