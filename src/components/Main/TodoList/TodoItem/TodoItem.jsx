import React from "react";
import './TodoItem.css'

const TodoItem = ({ data, remove }) => {
  const { title, description, isDone } = data;

  return <article>
    <h4>{title}</h4>
    <p>{description}</p>
    <label htmlFor="done">Terminado:</label>
    <input id="done" type="checkbox" />
    <button onClick={remove}>Borrar</button>
  </article>
};

export default TodoItem;
