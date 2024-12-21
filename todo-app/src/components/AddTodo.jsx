import React, { useState } from "react";

const AddTodo = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText(""); // Clear input field after adding
        }
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Enter task"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                style={{
                    padding: "10px",
                    marginRight: "10px",
                    width: "200px",
                    border: "1px solid #ccc",
                }}
            />
            <button
                onClick={handleAddTask}
                style={{
                    padding: "10px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Add Task
            </button>
        </div>
    );
};

export default AddTodo;
