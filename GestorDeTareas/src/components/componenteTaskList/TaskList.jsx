import React, { useState, useEffect } from 'react';
import TaskItem from '../componenteTaskItem/TaskItem';
import TaskForm from '../componenteTaskForm/TaskForm';
import "./tasklist.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const createNewTask = (taskName) => {
    setTasks((prevTasks) => {
      const exists = prevTasks.some((task) => task.name === taskName);
      if (!exists) {
        const newTasks = [...prevTasks, { name: taskName, done: false }];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        return newTasks;
      }
      return prevTasks;
    });
  };

  const deleteTask = (taskName) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.name !== taskName);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const toggleComplete = (taskName) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.name === taskName ? { ...task, done: !task.done } : task
      );
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return newTasks;
    });
  };

  return (
    <div className='conteinerTL'>
      <div className='container-fluid d-flex flex-column align-items-center bg-secondary'>
        <TaskForm onCreateTask={createNewTask} />
        <h1>Mis tareas</h1>
        <div className="tableTL">
          {tasks.length === 0 ? (
            <p>No hay tareas disponibles</p>
          ) : (
            <table className='table table-dark table-striped-row tableTL'>
              <thead>
                <tr>
                  <th className='col-2 tht'>Tareas</th>
                  <th className='col-1 tht'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <TaskItem
                    key={task.name}
                    task={task}
                    onDelete={deleteTask}
                    onToggleComplete={toggleComplete}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
