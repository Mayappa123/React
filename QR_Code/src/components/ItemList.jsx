import React from "react";

function ItemList({ items }) {
  return (
    <>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
