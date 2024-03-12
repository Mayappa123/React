import { useEffect, useState } from "react";

export const useProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productlist = await fetch("https://fakestoreapi.com/products");
    const productlistJSON = await productlist.json();
    setProducts(productlistJSON);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {products};
};
