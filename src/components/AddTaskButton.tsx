interface Props{
  submit: ()=>void;
  toggle:()=> void
}
import React from "react";
const AddTaskButton :React.FC<Props>= ({submit,toggle}) => {
  return (
    <button className="p-2 rounded-xl text-white border" onClick={() => {submit()
      toggle()
    }}>Agregar tarea</button>
  )
}

export default AddTaskButton