import "./App.css";
import "./styles/ParisOlympic.css";
import "./styles/item.css";
import "./styles/toast.css";
import "./styles/college.css";
import React from "react";
import Toast from "./components/Toast";
import Product from "./components/Product";
import Student from "./components/student";
import ItemList from "./components/ItemList";
import ParisOlympic from "./components/ParisOlympics";
import Food from "./components/food";
import College from "./components/college";
import Component1 from "./components/context";
import MyApp from "./components/useRef";
import MyComponent from "./components/LayoutEffect";

function App() {
  let fruit = ["apple", "banana", "cherry", "guava", "grapes"];
  let college = ["BMIT", "WIT", "SVIT", "IIT", "NIT"];
  let medals = [
    { id: 1, country: "USA", medals: 126 },
    { id: 2, country: "China", medals: 76 },
    { id: 3, country: "India", medals: 6 },
    { id: 4, country: "Pakistan", medals: 1 },
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
        <h3>Fruit Item</h3>
        <ItemList items={fruit} /> {/* passing array as props.. */}
      </div>
      <div>
        <h3>Food Items</h3>
        <Food /> {/* conditional redering */}
      </div>
      <div>
        <h3>Paris Olympic medals Tally</h3>
        <ParisOlympic medals={medals} /> {/* conditional redering */}
      </div>
      <div>
        <College college={college} />
      </div>
      <div>
        <Component1 /> {/* useContext Hook*/}
      </div>
      <div>
        <MyApp /> {/* useRef Hook*/}
      </div>
      <div>
        <MyComponent />
      </div>
    </>
  );
}

export default App;
