export default function Item({
  description,
  quantity,
  packed,
  removeItemHandler,
  id,
  packItemHandler,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => {
          packItemHandler(id);
        }}
      />
      <span
        style={
          packed
            ? {
                textDecoration: "line-through",
              }
            : {}
        }
      >
        {quantity} {description}
      </span>
      <button onClick={() => removeItemHandler(id)}>❌</button>
    </li>
  );
}
