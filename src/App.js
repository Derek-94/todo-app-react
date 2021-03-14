import React, { useState } from "react"
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos = {todos} />
    </TodoTemplate>
  )
}

export default App;