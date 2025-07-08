import React, { useState } from 'react';
import '../styled/form.css'; // Importando o CSS do formulário

export default function Form() {

   const [taskName, setTaskName] = useState('');
   const [tasks, setTasks] = useState([]);

   function handleChange(event) {
      setTaskName(event.target.value);
   }

   function handleAddTask(event) {
      event.preventDefault();
      if (taskName.trim() === '') {
         alert('Por favor, insira uma tarefa válida.');
         return;
      }
      setTasks([...tasks, {nome: taskName, marcada: false}]); // Adiciona a nova tarefa com o estado marcada como false
      setTaskName('');
   }

   function handleCheckTask(index) {
      const newTasks = [...tasks];
      newTasks[index].marcada = !newTasks[index].marcada; // Alterna o estado de marcada
      setTasks(newTasks);
   }
   return(
      <>
         <form onSubmit={handleAddTask} className="App-form">
               <label htmlFor="name">Registre uma Tarefa: </label>
               <input type="text" value={taskName} onChange={handleChange} className="form-control" />
            <button type="submit">Adicionar</button>
         </form>
         <ul>
            {tasks.map((task, index) => (
               <li key={index}>
                  <input type="checkbox" checked ={task.marcada} onChange={() =>handleCheckTask(index)} />
                  <span style={{ textDecoration: task.marcada ? 'line-through' : 'none' }}>
                     {task.nome}
                  </span>
               </li>
            ))}
         </ul>
      </>
   )
}