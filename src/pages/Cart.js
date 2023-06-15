import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/action";

function Cart() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <Box>
      <Typography variant="h4">Shopping Cart</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
        }}
      >
        <List>
          {items?.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                minWidth: "400px",
                background: "#e7e0e0",
                border: "1px solid #dfd7d7",
                borderRadius: "3px",
                margin: "4px",
              }}
              secondaryAction={
                <IconButton
                  onClick={() => handleRemove(item)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText sx={{ minWidth: "200px" }}>
                {item.name}
              </ListItemText>
              <ListItemText>{`${item.price}`}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Cart;
