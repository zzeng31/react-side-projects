export default function Filter({
  sortBy,
  handleFilterChange,
  clearItemHandler,
}) {
  return (
    <div className="actions">
      <select value={sortBy} onChange={handleFilterChange}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
        <option value="increaseQuantity">Sort by increasing quantity</option>
        <option value="decreaseQuantity">Sort by decreasing quantity</option>
      </select>
      <button onClick={clearItemHandler}>Clear list</button>
    </div>
  );
}
