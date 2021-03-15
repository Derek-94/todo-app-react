import React, { useState, useCallback, useRef } from "react"
import TodoTemplate from "./components/TodoTemplate"
import TodoInsert from "./components/TodoInsert"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "example1",
      checked: true
    },
    {
      id: 2,
      text: "example2",
      checked: true
    },
    {
      id: 3,
      text: "example3",
      checked: true
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
    const newTodo = {
      id: nextId.current,
      text: text,
      checked: false
    }
    setTodo(todos => [...todos, newTodo]);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    setTodo(todos => todos.filter(todo => todo.id !== id))
  }, [])

  const onToggle = useCallback(id => {
    setTodo(
      todos => todos.map(todo => 
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  },[])

  return (
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos = {todos} onRemove = {onRemove} onToggle = {onToggle} />
    </TodoTemplate>
  )
}

export default App;