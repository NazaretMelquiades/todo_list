import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import data from './data.js';

const TodoList = () => {

  // Estado inicial del formulario
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  //Estado inicial array de destinos
  //Estado --> items
  const [items, setItems] = useState(data);

  const [message, setMessage] = useState("");

  const paintData = () =>
    items.map((item, index) =>
      <TodoItem
        data={item}
        remove={() => removeItem(index)}
        toggleDone={() => toggleDone(index)}
        key={uuidv4()} />)

  const toggleDone = (i) => {
    const updatedItems = items.map((item, index) =>
      index === i ? { ...item, isDone: !item.isDone } : item
    );
    setItems(updatedItems);
  };

  const addItem = (new_item) => setItems([...items, new_item]);
  const removeAllItems = () => setItems([]);//decirle que no haya nada en el array
  const resetItems = () => setItems(data);
  const removeItem = (i) => {
    const answer = confirm("¿quieres borrar el elemento?");
    if (answer) {
      const remainingItems = items.filter((item, index) => index !== i);
      setItems(remainingItems); //carga el estado con los items restantes
      alert("Tarea borrada");
    }
    else {
      alert("operación anulada");
      return;
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: mínimo 6 caracteres
    if (values.title.trim().length < 6) {
      alert("La tarea debe tener al menos 6 caracteres");
      return;
    }
    console.log(values);

    //VALUES
    addItem(values)

    //limpio el input
    setValues({ title: "", description: "" });

    //mensaje temporal
    setMessage("Tarea añadida");
    setTimeout(() => setMessage(""), 5000);
  };


  return <section>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Título</label><br />
      <input type="text" name="title" onChange={handleChange} /><br />

      <label htmlFor="description">Descripción</label><br />
      <input type="text" name="description" onChange={handleChange} /><br />

      {values.title.trim() !== "" && (
        <button type="submit">Agregar</button>
      )}
    </form>

    {message && <p>{message}</p>}

    <button onClick={removeAllItems}>Borrar todo</button>
    <button onClick={resetItems}>Recargar</button>

    {paintData()}

  </section>;
};

export default TodoList;
