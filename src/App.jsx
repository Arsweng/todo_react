import { useEffect, useState } from "react";
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [todos, setTodos] = useState([]);

  function parsistData(newList) {
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    parsistData(newTodoList);
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIdex) => todoIdex !== index);
        parsistData(newTodoList);

    setTodos(newTodoList)

  }

  function handleEditTodo(index) {
    setTodoValue(todos[index])
    const newTodoList = todos.filter((todo, todoIdex) => todoIdex !== index);
        parsistData(newTodoList);

    setTodos(newTodoList)
  }
  const [todoValue, setTodoValue] = useState();

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
      <ToDoInput
        handAddTodos={handAddTodos}
        setTodoValue={setTodoValue}
        todoValue={todoValue}
      />
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App
