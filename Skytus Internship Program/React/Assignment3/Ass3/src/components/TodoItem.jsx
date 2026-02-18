const TodoItem = ({ todo, index, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={() => toggleTodo(index)}>
        {todo.text}
      </span>

      <div className="actions">
        <button onClick={() => editTodo(index)}>Edit</button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
