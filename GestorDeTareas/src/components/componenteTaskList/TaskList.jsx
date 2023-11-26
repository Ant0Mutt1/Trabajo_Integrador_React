import React, { useState } from 'react';
import TaskItem from '../componenteTaskItem/TaskItem';
import TaskForm from '../componenteTaskForm/TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const createNewTask = (taskName) => {
    const exists = tasks.find((task) => task.name === taskName);
    if (!exists) {
      setTasks([...tasks, { name: taskName, done: false }]);
    }
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
  };

  const toggleComplete = (taskName) => {
    setTasks(
      tasks.map((task) =>
        task.name === taskName ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <TaskForm onCreateTask={createNewTask} />
      <h1>Mis tareas</h1>
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
            <th>Acciones</th>
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
    </div>
  );
};

export default TaskList;
