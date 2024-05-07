import React from "react";

const TodoItem = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="itemContainer">
      <span
        className="itemTitle"
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#7B0707" : "white"
        }}
      >
        {title}
      </span>
      <div className="itemButtonDiv">
        <div className="toggle" onClick={onToggle}>
          <input
            className="toggle-state"
            type="checkbox"
            name="check"
            value="check"
            checked={completed} // Reflect completed state in checked attribute
          />
          <div className="indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
