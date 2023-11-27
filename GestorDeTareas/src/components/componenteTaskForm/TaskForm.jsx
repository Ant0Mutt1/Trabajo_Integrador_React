import React, { useState } from 'react';

const TaskForm = ({ onCreateTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(newTask);
    setNewTask('');
  };

  return (
    <div className='container-fluid d-flex  flex-column align-items-center bg-secondary'>
      <h1>Agregar tareas</h1>
      <div className="container-md d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <input className=' border border-bottom rounded fs-5' placeholder='Nueva Tarea... ' type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button className='btn btn-success'  type="submit">Guardar tarea</button>
      </form>
      </div>
    </div>
  );
};

export default TaskForm;
