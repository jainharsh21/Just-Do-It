import Reacct, { createContext } from "react";

const defaultTodos = [
  { id: 1, task: "Work Work Work", completed: false },
  { id: 2, task: "Learn Learn Learn", completed: true },
];

export const TodosContext = createContext();
