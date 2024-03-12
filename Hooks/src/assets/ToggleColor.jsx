import React, { useState } from "react";

export default function ToggleColor() {
  const [color, setColor] = useState("black");

  const toggleColor = () => {
    setColor(color === "black" ? "blue" : "black");
  };

  return (
    <>
      <h1 style={{ color: color }}>Mayappa Pujari</h1>
      <button onClick={toggleColor}>Click</button>
    </>
  );
}
