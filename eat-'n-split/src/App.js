import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  const handleAddFriend = (newFriend) => {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setShowAddFriendForm(false);
  };
  const handleSplitBill = (editedFriend) => {
    console.log(editedFriend);
    setFriends((prevFriends) => {
      return prevFriends.map((friend) => {
        if (editedFriend.id === friend.id) {
          return editedFriend;
        } else {
          return friend;
        }
      });
    });
    setSelectedFriend(null);
  };
  const handleOpenAddFriendForm = () => {
    setShowAddFriendForm((prev) => !prev);
  };
  const selectedFriendHandler = (friend) => {
    setShowAddFriendForm(false);
    setSelectedFriend((prevFriend) =>
      prevFriend?.id === friend.id ? null : friend
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriendHandler={selectedFriendHandler}
          selectedFriend={selectedFriend}
        />
        {showAddFriendForm && (
          <FormAddFriend handleAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleOpenAddFriendForm}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, selectedFriendHandler, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          selectedFriendHandler={selectedFriendHandler}
        ></Friend>
      ))}
    </ul>
  );
}
function Friend({ friend, selectedFriendHandler, selectedFriend }) {
  const { name, balance, id, image } = friend;
  const isSelected = selectedFriend?.id === id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} ${balance}
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you ${Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}

      <Button onClick={() => selectedFriendHandler(friend)}>
        {isSelected ? "Cancel" : "Select"}
      </Button>
    </li>
  );
}
function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPayer, setBillPayer] = useState("you");
  const friendExpense = bill - myExpense === 0 ? "" : bill - myExpense;
  const billChangeHandler = (e) => {
    const amount = +e.target.value;
    if (isNaN(amount)) return;
    setBill(+amount);
  };
  const myExpenseChangeHandler = (e) => {
    const amount = +e.target.value;

    if (isNaN(amount)) return;
    if (amount > bill) return;
    setMyExpense(+amount);
  };

  const billPayerChangeHandler = (e) => {
    setBillPayer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    handleSplitBill({
      ...selectedFriend,
      balance:
        billPayer === "you"
          ? selectedFriend.balance + friendExpense
          : selectedFriend.balance - myExpense,
    });
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" value={bill} onChange={billChangeHandler} required />
      <label>🫵 Your Expense</label>
      <input type="text" value={myExpense} onChange={myExpenseChangeHandler} />
      <label>👉 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />
      <label> 🤔 Who is paying the bill?</label>
      <select value={billPayer} onChange={billPayerChangeHandler}>
        <option value="you">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

function FormAddFriend({ handleAddFriend }) {
  const defaultImg = "https://i.pravatar.cc/48";
  const [name, setName] = useState("");
  const [image, setImage] = useState(defaultImg);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    handleAddFriend({
      id: crypto.randomUUID(),
      name: name,
      image: image,
      balance: 0,
    });
    setName("");
    setImage(defaultImg);
  };
  return (
    <form className="form-add-friend" onSubmit={submitForm}>
      <label>👬 Name</label>
      <input type="text" value={name} onChange={nameChangeHandler} required />
      <label>🏞️ Image URL</label>
      <input type="text" value={image} onChange={imageChangeHandler} />
      <Button onClick={() => {}}>Add</Button>
    </form>
  );
}
function Button({ children, onClick, disabled }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
export default App;
