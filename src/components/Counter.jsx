import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function handleClickInc() {
    setCount(count + incrementBy);
  }

  function handleClickDec() {
    setCount(count - incrementBy);
  }

  function increment() {
    setIncrementBy(incrementBy + 1);
  }

  function decrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <>
      <h1>Count Value is: {count}</h1>
      <br />
      <button onClick={handleClickInc}>Increase Count</button>
      <button onClick={handleClickDec}>Decrease Count</button>
      <div>
        <h1>We're incrementing the value by {incrementBy}.</h1>
        <button onClick={increment}>Increase Increment Value</button>
        <button onClick={decrement}>Decrease Increment Value</button>
      </div>
    </>
  );
}
