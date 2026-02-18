import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  /* =========================
     Load from localStorage
  ========================= */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  /* =========================
     Save to localStorage
  ========================= */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* =========================
     Add Todo (JS Validation)
  ========================= */
  const addTodo = (text) => {
    // PURE JS ERROR HANDLING
    if (text.trim() === "") {
      setError("Todo cannot be empty!");
      return;
    }

    setError("");

    setTodos([
      ...todos,
      { text: text.trim(), completed: false }
    ]);
  };

  /* =========================
     Delete Todo
  ========================= */
  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  /* =========================
     Toggle Complete
  ========================= */
  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  /* =========================
     Edit Todo (JS Prompt)
  ========================= */
  const editTodo = (index) => {
    const newText = prompt("Edit todo:", todos[index].text);

    // JS validation again
    if (newText === null || newText.trim() === "") return;

    const updated = [...todos];
    updated[index].text = newText.trim();
    setTodos(updated);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <TodoForm addTodo={addTodo} />

      {error && <p className="error">{error}</p>}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
