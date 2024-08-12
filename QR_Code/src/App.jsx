import "./App.css";
import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("Hello World");
  return (
    <>
      <div className="container">
        <h3>Generate QR code in react...</h3>
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="text">enter Text </label>
          <input
            type="text"
            name=""
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
          className="save"
          style={{
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Save image
        </button>
      </div>
    </>
  );
}

export default App;
