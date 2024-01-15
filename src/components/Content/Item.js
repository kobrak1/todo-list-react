import React from 'react'
import { useTodo } from '../../context/TodoContext'

const Item = ({data}) => {
    const {handleChange, handleDelete} = useTodo();
  return (
    <li className={data.completed ? "completed" : ""} key={data.id}>
    <div className="view">
      <input
        property="done"
        className="toggle"
        type="checkbox"
        checked={data.completed}
        onChange={() => handleChange(data.id)}
      />
      <label property="text">{data.todo}</label>
      <button
        className="destroy"
        onClick={() => handleDelete(data.id)}
      ></button>
    </div>
  </li>
  )
}

export default Item
