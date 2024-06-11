import React, { useContext } from "react"
import { ConText } from "../context/AppContext"

const SelectFetchCategory: React.FC = () => {
  const { settype } = useContext(ConText);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    settype(e.target.value);
  }
  return (
    <select className="rounded-xl p-2 border-2" onChange={handleChange} aria-label="selectfetchcategory" defaultValue="todo">
      <option value="all" >Mostrar todas</option>
      <option value="incompleted" >Incompletas</option>
      <option value="completed">Completas</option>
    </select>
  )
}

export default SelectFetchCategory