import React from "react"
import { useState } from "react"
import TodoInputBox from "./TodoInputBox"
import SelectFetchCategory from "./SelectFetchCategory"
import OpenTaskInputButton from "./OpenTaskInputButton"

const TodoForm: React.FC = () => {
  const [openAddTask, setopenAddTask] = useState(false);
  const toggleaddTask = () => {
    setopenAddTask(!openAddTask)
  }

  return (
    <div>
      <div className='flex justify-between p-4'>
        <OpenTaskInputButton toggle={toggleaddTask} open={openAddTask} />
        <SelectFetchCategory />
      </div>
      {openAddTask && <TodoInputBox toggle={toggleaddTask} />}
    </div>
  )
}

export default TodoForm
