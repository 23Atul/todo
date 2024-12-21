import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: "TASK",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={dragRef}
            style={{
                padding: "10px",
                margin: "5px 0",
                border: "1px solid gray",
                backgroundColor: isDragging ? "#e0e0e0" : "white",
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
            }}
        >
            {task.task}
        </div>
    );
};

export default Task;
