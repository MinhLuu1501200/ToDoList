import React, { useState } from "react";
import data from "./data.json";
import { Header } from "./Header/header";
import { ToDoList } from "./ToDoList/ToDoList";
import "./App.css";
/**
 * @author
 * @function App
 **/

export const App = (props) => {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    console.log(filtered);
    setToDoList(filtered);
  };
  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </div>
  );
};
