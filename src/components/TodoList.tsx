import React from "react"
import { useContext } from "react"
import { ConText } from "../context/AppContext"
import { todoSchema } from "../interfaces/interface"
import TodoItem from "./TodoItem"

const TodoList: React.FC = () => {
  const { todos } = useContext(ConText)
  return (
    <div>
      {todos.length > 0 ?
        todos?.map((todo: todoSchema, index: number) => (
          <TodoItem key={index} title={todo.title} date={todo.date} completed={todo.completed} id={todo.id} />
        )) :
        <div className="flex items-center justify-center gap-4 p-4 bg-primary bg-opacity-40 rounded-xl my-3">          
            No se encontraron tareas
        </div>}
    </div>
  )
}

export default TodoList
