import "./App.css";
import "./styles/ParisOlympic.css";
import "./styles/item.css";
import React from "react";
import Toast from "./components/Toast";
import Product from "./components/Product";
import Student from "./components/student";
import ItemList from "./components/ItemList";
import ParisOlympic from "./components/ParisOlympics";

function App() {
  let fruit = ["apple", "banana", "cherry", "guava", "grapes"];
  let obj = [
    { id: 1, country: "USA", medals: 126 },
    { id: 2, country: "China", medals: 76 },
    { id: 3, country: "India", medals: 6 },
  ];

  return (
    <>
      <div>
        <Toast />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Student name="sachin" age={25} /> {/* with props */}
        <Student /> {/* without props */}
      </div>
      <div>
        <h3>Fruit tem</h3>
        <ItemList items={fruit} /> {/* passing array as props.. */}
      </div>
      <div>
        <h3>Paris Olympic medals Tally</h3>
        <ParisOlympic medals={obj} /> {/* conditional redering */}
      </div>
    </>
  );
}

export default App;
