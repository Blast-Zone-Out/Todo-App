import React, { useState, useEffect } from "react";
import "./styles/Taskpage.css";
import icon from "/src/assets/icon.png";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todo-tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever `tasks` changes
  useEffect(() => {
    if (tasks.length > 0) {
      // Save tasks to localStorage if the array is not empty
      localStorage.setItem("todo-tasks", JSON.stringify(tasks));
    } else {
      // Remove tasks from localStorage if the array is empty
      localStorage.removeItem("todo-tasks");
    }
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) {
      alert("You must write something!");
      return;
    }
    const newTask = { text: inputValue, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h2>
          To-Do List App <img src={icon} alt="icon" />
        </h2>
        <div className="row">
          <input
            type="text"
            placeholder="Add your text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? "checked" : ""}
              onClick={() => toggleTaskCompletion(index)}
            >
              {task.text}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(index);
                }}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskPage;
