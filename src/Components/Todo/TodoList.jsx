import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import "./Todo.css";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [buttonText, setButtonText] = useState("+");

  const handleAddTodo = (title) => {
    const newTodo = {
      id: todoItems.length + 1,
      title,
      completed: false,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodoItems(
      todoItems.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };

  const toggleAddTodo = () => {
    setShowAddTodo(!showAddTodo);
    if (showAddTodo) {
      setButtonText("+");
    } else {
      setButtonText("-");
    }
  };

  return (
    <div className="todoContainer">
      <div className="todoBody">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <div className="Add">
          {showAddTodo && <AddTodo onAdd={handleAddTodo} />}
        </div>
        <div className={`itemListContainer ${showAddTodo ? 'blurBackground' : ''}`}>
          {todoItems.length > 0 ? (
            <ul className="itemList">
              {todoItems.map((todo) => (
                <li key={todo.id}>
                  <TodoItem
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onToggle={() => handleToggleTodo(todo.id)}
                    onDelete={handleDeleteTodo}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="info">
              <p>No todo items yet. Add a new todo above.</p>
            </div>
          )}
        </div>
        <button onClick={toggleAddTodo} className="addButton">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
