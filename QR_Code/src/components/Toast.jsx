import React, { useState } from "react";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
      const [text, setText] = useState("Hello World");

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
      <div class="container">
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
    </>
  );
}

export default Toast;
