import { useState } from "react";
export default function Form({ addItemHandler }) {
  const [item, setItem] = useState("");
  const [itemNumber, setItemNumber] = useState(1);

  const handleItemInputChange = (e) => {
    setItem(e.target.value);
  };
  const handleNumberInputChange = (e) => {
    setItemNumber(+e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;
    console.log(item, itemNumber);

    addItemHandler({
      id: new Date(),
      description: item,
      quantity: itemNumber,
      packed: false,
    });
    setItem("");
    setItemNumber(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🏝️ trip?</h3>
      <select value={itemNumber} onChange={handleNumberInputChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={handleItemInputChange}
      ></input>
      <button>Add</button>
    </form>
  );
}
