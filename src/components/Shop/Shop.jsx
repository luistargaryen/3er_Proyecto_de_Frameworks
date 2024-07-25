import { menu_list } from "../../assets/assets";

import "./Shop.css";

export const Shop = ({ category, setCategory }) => {
  return (
    <div className="explore-menu">
      <h1>SHOP</h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <p>Shop {item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
