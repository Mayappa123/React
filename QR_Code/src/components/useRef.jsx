import { useState, useEffect, useRef } from "react";

export default function MyApp() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h3>UseRef Hook</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <b>Render Count: {count.current}</b>
    </>
  );
}
