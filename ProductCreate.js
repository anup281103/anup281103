import React, { useState } from "react";
import axios from "axios";

const ProductCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const product = { title, description, price, categoryId };
    await axios.post("http://localhost:3001/api/products", product);
    setTitle("");
    setDescription("");
    setPrice(0);
    setCategoryId("");
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <br />
        <label>Category ID:</label>
        <input
          type="text"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductCreate;
