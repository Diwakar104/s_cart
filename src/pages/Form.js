import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action";
function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ name, price }));
    setName("");
    setPrice("");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: "4px", margin: "2px" }}
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ padding: "4px", margin: "2px" }}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button style={{ padding: "3px" }} type="submit">
          Add Item
        </button>
      </form>
    </Box>
  );
}

export default Form;
