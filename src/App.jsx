import { useState } from "react";
import Hello from "./components/Hello";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hello name="Shubham" message="using Props" />
      <Hello name="John" message="using Props" />
    </div>
  );
}

export default App;
