import axios from 'axios';
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList';

const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/tasks"



const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([])

  const getTodos = async () => {
    try {
      const {data} = await axios<TodoType[]>(BASE_URL)
      setTodos(data)
    } catch (error) {
      console.log(error);
    }
  }

  const addTodo:Addfn = async (text) => {
    const newTodo = {task:text}
    try {
      await axios.post(BASE_URL, newTodo)
      getTodos()
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTodo:Deletefn = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`)
      getTodos()
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getTodos()
  }, [])
  

  return (
    <div className='main'>
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

export default Home