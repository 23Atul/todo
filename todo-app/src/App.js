import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskBox from "./components/TaskBox";
import AddTodo from "./components/AddTodo";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Task 1", status: "todo" },
    { id: 2, task: "Task 2", status: "todo" },
    { id: 3, task: "Task 3", status: "in-progress" },
    { id: 4, task: "Task 4", status: "completed" },
  ]);

  const updateTaskStatus = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const addNewTask = (taskText) => {
    const newTask = {
      id: Date.now(), // Unique ID for the task
      task: taskText,
      status: "todo", // New tasks are added to "To Do" by default
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px" }}>
        <h1>To-Do App</h1>
        <AddTodo onAddTask={addNewTask} />
        <div style={{ display: "flex", gap: "20px" }}>
          <TaskBox
            title="To Do"
            tasks={tasks.filter((task) => task.status === "todo")}
            status="todo"
            updateTaskStatus={updateTaskStatus}
          />
          <TaskBox
            title="In Progress"
            tasks={tasks.filter((task) => task.status === "in-progress")}
            status="in-progress"
            updateTaskStatus={updateTaskStatus}
          />
          <TaskBox
            title="Completed"
            tasks={tasks.filter((task) => task.status === "completed")}
            status="completed"
            updateTaskStatus={updateTaskStatus}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
