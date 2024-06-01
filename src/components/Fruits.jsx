import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldOut: false },
    { name: "Mango", price: 7, emoji: "🥭", soldOut: true },
    { name: "Orange", price: 2, emoji: "🍊", soldOut: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldOut: true },
  ];

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          ></Fruit>
        ))}
      </ul>
    </>
  );
}
