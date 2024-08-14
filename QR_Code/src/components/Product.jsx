import React from "react";
import "../styles/product.css";

let products = [
  { id: 1, name: "laptop", price: 40000 },
  { id: 2, name: "mobile", price: 12000 },
  { id: 3, name: "earphone", price: 1000 },
  { id: 4, name: "shoes", price: 600 },
  { id: 5, name: "shirt", price: 200 },
];

const Product = () => {
  return (
    <>
      <div className="product">
        {products.map((p) => (
          <div key={p.id} className="product-item">
            <h4>{p.name}</h4>
            <p>Price: {p.price}</p>
          </div>
          
        ))}
        
      </div>
      
    </>
  );
};

export default Product;
