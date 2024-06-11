import React from "react"
interface Props {
  toggle: () => void,
  open: boolean
}
const OpenTaskInputButton: React.FC<Props> = ({ toggle, open }) => {
  return (
    <button className="bg-primary p-2 rounded-xl text-white" onClick={() => {
      toggle()
    }}>{open ? 'Cerrar' : 'Agregar tarea'}</button>
  )
}

export default OpenTaskInputButton