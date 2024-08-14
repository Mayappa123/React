import React from "react";

function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + "✔️" : name}</li>;
}

function Food() {
  return (
    <>
      <section>
        <ul>
          <Item name="VadaPav" isPacked={true} />
          <Item name="Dabheli" isPacked={false} />
          <Item name="Kachori" isPacked={true} />
        </ul>
      </section>
    </>
  );
}

export default Food;
