export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}