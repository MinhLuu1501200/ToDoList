import React, { useState } from "react";

/**
 * @author
 * @function ToDoForm
 **/

export const ToDoForm = (props) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(userInput);
    setUserInput("");
  };
  const handleChange = (event) => {
    setUserInput(event.currentTarget.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          name="task"
          id="addTask"
          placeholder="Enter task..."
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
        {console.log(userInput)}
      </form>
    </div>
  );
};
