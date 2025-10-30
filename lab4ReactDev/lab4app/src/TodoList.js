function TodoList({ todos }) {
  return (
    <div>
      <h1>Lista zadań:</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
