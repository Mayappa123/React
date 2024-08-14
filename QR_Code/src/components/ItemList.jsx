import React from "react";

function ItemList({ items }) {
  return (
    <>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemList;
