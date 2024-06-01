import { useState } from "react";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Shubham",
    message: "Welcome to HeapTrace!",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
