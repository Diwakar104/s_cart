import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action";
import Snackbar from "@mui/material/Snackbar";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price.trim() === "") {
      setOpen(true);
      setErrorMessage("Please enter both item name and price.");
      return;
    } else {
      dispatch(addItem({ name, price }));
      setName("");
      setPrice("");
    }
    // dispatch(addItem({ name, price }));
    // setName("");
    // setPrice("");
  };
  const handleClose = () => {
    setOpen(false);
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
      <Snackbar
        severity={"error"}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMessage}
        // action={action}
      />
    </Box>
  );
}

export default Form;
