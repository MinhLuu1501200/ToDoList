import React from "react";
import { ToDo } from "./ToDo";

/**
 * @author
 * @function ToDoList
 **/

export const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} key={todo.id} handleToggle={handleToggle} />;
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
      <div>
        <input type="text" placeholder="Enter task..." />
        <button value="Add">Add</button>
      </div>
    </div>
  );
};
