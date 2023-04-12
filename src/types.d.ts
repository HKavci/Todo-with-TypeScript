interface TodoType {
    id: string | number;
    task: string;
  }

  interface ITodoList {
    todos: TodoType[];
    deleteTodo: Deletefn
  }

  interface IListItem {
    todo: TodoType
    deleteTodo: Deletefn
  }

  type Addfn = (text:string) => void

  type Deletefn = (id:string | number) => void