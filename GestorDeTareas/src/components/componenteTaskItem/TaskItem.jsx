import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <tr key={task.name} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
      <td>{task.name}</td>
      <td>
        <button className='btn btn-danger'  onClick={() => onDelete(task.name)}>Borrar</button>
        <button className='btn btn-success'  onClick={() => onToggleComplete(task.name)}>Completar</button>
      </td>
    </tr>
  );
};

export default TaskItem;
