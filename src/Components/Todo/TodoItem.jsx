import React from "react";

const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="itemContainer">
      <span
        className="itemTitle"
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </span>
      <div className="itemButtonDiv">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="buttonCheck"
        />
      </div>
    </div>
  );
};

export default TodoItem;
