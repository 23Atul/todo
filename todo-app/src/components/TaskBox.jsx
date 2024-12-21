import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const TaskBox = ({ title, tasks, status, updateTaskStatus }) => {
    const [, dropRef] = useDrop({
        accept: "TASK",
        drop: (item) => {
            updateTaskStatus(item.id, status);
        },
    });

    return (
        <div
            ref={dropRef}
            style={{
                border: "2px solid black",
                padding: "20px",
                minHeight: "200px",
                width: "200px",
                backgroundColor: "#f9f9f9",
            }}
        >
            <h3>{title}</h3>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskBox;
