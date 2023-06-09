import "../style.css";
import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const removeItemHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const packItemHandler = (id) => {
    // const itemIndex = items.findIndex((item) => item.id === id);
    // const newItems = [...items];
    // newItems[itemIndex].packed = !newItems[itemIndex].packed;
    // setItems(newItems);
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  };
  const clearItemHandler = () => {
    const confrimed = window.confirm(
      "Are you sure you want to delet all items?"
    );
    if (confrimed) {
      setItems([]);
    }
  };
  return (
    <div className="App">
      <Logo />
      <Form addItemHandler={addItemHandler} />
      <PackingList
        items={items}
        removeItemHandler={removeItemHandler}
        packItemHandler={packItemHandler}
        clearItemHandler={clearItemHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
