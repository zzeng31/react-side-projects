import { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
export default function PackingList({
  items,
  removeItemHandler,
  packItemHandler,
  clearItemHandler,
}) {
  const [sortBy, setSortBy] = useState("input");
  const handleFilterChange = (e) => {
    setSortBy(e.target.value);
  };
  let sortedItems;
  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    case "increaseQuantity":
      sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
      break;
    case "decreaseQuantity":
      sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
      break;
    default:
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            id={item.id}
            removeItemHandler={removeItemHandler}
            packItemHandler={packItemHandler}
          />
        ))}
      </ul>
      <Filter
        sortBy={sortBy}
        handleFilterChange={handleFilterChange}
        clearItemHandler={clearItemHandler}
      />
    </div>
  );
}
