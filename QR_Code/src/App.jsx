import "./App.css";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product";
import Student from "./components/student";
import ItemList from "./components/ItemList";
import ParisOlympic from "./components/ParisOlympics";

function App() {
  const [text, setText] = useState("Hello World");
  let fruit = ["apple", "banana", "cherry", "guava", "grapes"];
  let obj = [
    { id: 1, country: "USA", medals: 126 },
    { id: 2, country: "China", medals: 74 },
    { id: 3, country: "India", medals: 6 },
  ];

  const notify = () => {
    console.log("Notify triggered!");
    toast.success("QR saved succeessfully...", {
      autoClose: 3000,
      position: "top-center",
      icon: "🚀",
    });
  };
  return (
    <>
      <div classcountry="container">
        <h3>Generate QR code in react...</h3>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="text">enter Text </label>
          <input
            type="text"
            country=""
            id="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div
          id="qrCode"
          style={{ marginTop: "20px", height: "150px", width: "150px" }}
        >
          <QRCode
            value={text}
            size={200}
            bgColor="white"
            fgColor="black"
            level="H"
            style={{ textAlign: "center" }}
          />
        </div>
        <br />
        <button
          onClick={notify}
          classcountry="save"
          style={{
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Save image
        </button>
      </div>
      <ToastContainer />
      <div>
        <Product />
      </div>
      <div>
        <Student country="sachin" age={25} /> {/* with props */}
        <Student /> {/* without props */}
      </div>
      <div>
        <h2>Fruit tem</h2>
        <ItemList items={fruit} /> {/* passing array as props.. */}
      </div>
      <div>
        <h2>Paris Olympic medals Tally</h2>
        <ParisOlympic medals={obj} /> {/* conditional redering */}
      </div>
    </>
  );
}

export default App;
