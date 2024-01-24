import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    return setCount((c) => c + 1);
  }

  function decrement() {
    return setCount((c) => c - 1);
  }

  return (
    <div className="container">
      <div className="dec">
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
      </div>
      <div className="display btn">
        <div className="number">{count}</div>
      </div>
      <div className="inc">
        <button className="btn btn-success" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}
