import React, { useState } from "react";
import "./food.css";

const FoodItem = ({ image, name, price, quantity, onChange }) => {
  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <input
        type="number"
        placeholder="Quantity"
        min="1"
        max="10"
        value={quantity}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const FoodItemList = ({ foodItems }) => {
  const [quantity, setQuantity] = useState([]);

  // Calculate the total cost of the order
  const totalCost = foodItems.reduce((acc, foodItem) => {
    return acc + foodItem.price * quantity[foodItem.id];
  }, 0);

  // Get the current time
  const currentDate = new Date();

  // Calculate the expected delivery time
  const expectedDeliveryTime = new Date(currentDate.getTime() + 60 * 60 * 1000);

  return (
    <div className="food-item-list">
      {foodItems.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          image={foodItem.image}
          name={foodItem.name}
          price={foodItem.price}
          quantity={quantity[foodItem.id]}
          onChange={(value) => {
            setQuantity({ ...quantity, [foodItem.id]: value });
          }}
        />
      ))}

      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Total Cost: {totalCost}</p>
        <p>Order Time: {currentDate.toLocaleString()}</p>
        <p>Expected Delivery Time: {expectedDeliveryTime.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FoodItemList;