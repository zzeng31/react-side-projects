export default function Stats({ items }) {
  const numbersOfItems = items.length;
  const numbersOfPacked = items.reduce(
    (packed, curItem) => (curItem.packed ? packed + 1 : packed),
    0
  );
  const percentage =
    numbersOfItems === 0
      ? 0
      : ((numbersOfPacked / numbersOfItems) * 100).toFixed();
  let message = null;
  if (numbersOfItems === 0) {
    message = <em>Start adding some items to your packing list 🧳</em>;
  } else if (+percentage === 100) {
    message = <em>You got everything! Ready for the trip! ✈️</em>;
  } else {
    message = (
      <em>
        🧳 You have {numbersOfItems} items on your list, and you already packed
        {` ${numbersOfPacked} (${percentage}%)`}
      </em>
    );
  }

  return <footer className="stats">{message}</footer>;
}
