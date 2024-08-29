import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
