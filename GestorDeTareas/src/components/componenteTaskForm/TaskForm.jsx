import React, { useState } from 'react';

const TaskForm = ({ onCreateTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <h1>Agregar tareas</h1>
      <form onSubmit={handleSubmit}>
        <label>Nueva tarea</label>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button type="submit">Guardar tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
