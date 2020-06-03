import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Work", completed: false },
    { id: 2, task: "Sleep", completed: true },
    { id: 3, task: "Eat", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Just Do It</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm />
      <TodoList todos={todos} />
    </Paper>
  );
}
export default TodoApp;
