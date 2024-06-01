export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Orange", price: 2, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.name} {fruit.price}$ {fruit.emoji}
          </li>
        ))}
      </ul>
    </>
  );
}
