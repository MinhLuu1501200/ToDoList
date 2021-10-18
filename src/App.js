import React, { useState } from "react";
import data from "./data.json";
import { Header } from "./Header/header";
import { ToDoList } from "./ToDoList/ToDoList";
import "./App.css";
import { ToDoForm } from "./ToDoForm";
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
  const addTask = (userInput) => {
    setToDoList([
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ]);
  };
  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm toDoList={toDoList} addTask={addTask} />
    </div>
  );
};
