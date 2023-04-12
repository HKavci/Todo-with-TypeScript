


const TodoListItem:React.FC<IListItem> = ({todo, deleteTodo}) => {
  return (
    <li>
      {/* <p className='checked'>Todo </p> */}
      <p> {todo.task} </p>
      <span className="task-icons" onClick={()=>deleteTodo(todo.id)} >✖️</span>
    </li>
  );
};

export default TodoListItem