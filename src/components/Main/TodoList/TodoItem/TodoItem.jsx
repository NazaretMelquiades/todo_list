import React from "react";
import './TodoItem.css'

const TodoItem = ({ data, remove, toggleDone }) => {
  const { title, description, isDone } = data;

  return <article>
    <h4 data-done={isDone}>{title}</h4>
    <p>{description}</p>
    <label htmlFor="done">Terminado:</label>
    <input id="done" type="checkbox" checked={isDone} onChange={toggleDone} />
    <button onClick={remove}>Borrar</button>
  </article>
};

export default TodoItem;
