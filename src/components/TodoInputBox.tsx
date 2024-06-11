import { useState, useContext } from "react"
import React from "react"
import AddTaskButton from "./AddTaskButton"
import { todoSchema } from "../interfaces/interface"
import { ConText } from "../context/AppContext"
import { v4 } from 'uuid';
interface Props {
   toggle: () => void,
}
const TodoInputBox: React.FC<Props> = ({ toggle }) => {
   const { addTodo } = useContext(ConText)
   const [category] = useState<string>('incompleted')
   const [title, settitle] = useState<string>('');
   const submit = () => {
      if (!title) {
         alert('Ingresa una tarea')
         return;
      }
      const unique_id = v4();
      const todo: todoSchema = {
         id: unique_id.slice(0, 8),
         title,
         status: category,
         completed: false,
         date: `${new Date().toLocaleDateString()}`
      }
      addTodo(todo);
      settitle('')
   }

   return (
      <div className="bg-primary p-4 rounded-xl z-50 h-auto mb-4 ">
         <div className=" flex flex-col gap-4">            
            <div className="flex flex-col gap-3 text-secondary">
               <label htmlFor="title" className="text-white">Titulo</label>
               <input type="text" placeholder='Ingresa una tarea' className="p-2 outline-none" id="title" name="title" onChange={(e) => {
                  settitle(e.target.value)
               }} value={title} />
            </div>
            <div className="flex gap-4">
               <AddTaskButton submit={submit} toggle={toggle} />
               <button className='p-2 rounded-xl' onClick={toggle}> Cancelar</button>
            </div>
         </div>
      </div>
   )
}

export default TodoInputBox
