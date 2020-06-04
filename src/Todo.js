import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

function Todo({ task, completed }) {
  return (
    <ListItem>
      <ListItemText>{task}</ListItemText>
    </ListItem>
  );
}

export default Todo;
