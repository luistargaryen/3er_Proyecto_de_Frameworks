import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { TechItem } from "../TechItem/TechItem";
import "./TechDisplay.css";

export const TechDisplay = ({ category }) => {
  const { product_list } = useContext(StoreContext);

  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: value ? parseInt(value, 10) : (name === 'min' ? 0 : Infinity)
    }));
  };

  const resetFilters = () => {
    setPriceRange({ min: 0, max: Infinity });
  };

  const filteredList = product_list.filter((item) => {
    return (
      (category === 'All' || category === item.category) &&
      item.price >= priceRange.min &&
      item.price <= priceRange.max
    );
  });

  return (
    <div className="tech-display">
      <div className="tech-display-filters">
        <label>
          Min Price:
          <input
            type="number"
            name="min"
            value={priceRange.min === 0 ? '' : priceRange.min}
            onChange={handlePriceChange}
            placeholder="Min"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="max"
            value={priceRange.max === Infinity ? '' : priceRange.max}
            onChange={handlePriceChange}
            placeholder="Max"
          />
        </label>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div className="tech-display-list">
        {filteredList.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredList.map((item) => (
            <TechItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        )}
      </div>
    </div>
  );
};
