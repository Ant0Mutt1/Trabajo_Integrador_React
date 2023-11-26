import React from 'react';
import { useState } from 'react';

const TaskForm = () => {

    const [newTask, setNewTask] = useState ()

    const handleSubmit = (e) => {
        e.preventDefault (); 
        localStorage.setItem('task', newTask)
        setNewTask('')

    }
    return (
        <div>
            <h1>Agregar tareas</h1>
            <form onSubmit={handleSubmit}>
               <label>Nueva tarea</label> <input type='text' value={newTask} onChange={(e) => setNewTask (e.target.value)}></input>
                <button onClick={() => (newTask)}>Guardar tarea</button>
            </form>
        </div>
    );
}

export default TaskForm;
