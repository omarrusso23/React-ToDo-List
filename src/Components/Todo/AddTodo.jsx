import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={handleChange}
        className="addText"
      />
      <button type="submit">Add To List</button>
    </form>
  );
};

export default AddTodo;
