import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClickInc() {
    setCount(count + 1);
  }
  function handleClickDec() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Count Value is: {count}</h1> <br />
      <button onClick={handleClickInc}>Increase Count</button>
      <button onClick={handleClickDec}>Decrease Count</button>
    </>
  );
}
