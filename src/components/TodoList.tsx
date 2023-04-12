import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
