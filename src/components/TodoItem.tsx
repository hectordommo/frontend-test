import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { todoSchema } from '../interfaces/interface';
import { useContext } from 'react';
import { ConText } from '../context/AppContext';

const TodoItem: React.FC<todoSchema> = ({ date, completed, title, id }) => {

  const { deletetodo, updatetodo } = useContext(ConText)

  return (
    <div className='flex items-center gap-4 p-4 bg-primary bg-opacity-40 rounded-xl my-3'>
      <div className='outline-none' onClick={() => {
        updatetodo(id)
      }}>
        <input type="checkbox" className='checkboxstyle' checked={completed} onChange={() => { }} data-testid="istaskcompleted" />
      </div>
      <div>
        <h3 className='tracking-wide'>{completed ? <s>{title}</s> : <>{title}</>} </h3>
        <p className='text-gray-700'>{date}</p>
      </div>
      <div className='ml-auto flex gap-3 text-xl'>
        <button className='p-3 rounded-md' onClick={() => deletetodo(id)}>
          <BsFillTrashFill data-testid="deletebutton" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem
