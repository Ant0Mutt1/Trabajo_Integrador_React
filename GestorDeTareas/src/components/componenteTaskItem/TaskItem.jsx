import React, { useState } from 'react';
import confetti from "canvas-confetti"
import "./taskitem.css"

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <tr  className="trt" key={task.name} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
      <td className="tdt">{task.name}</td>
      <td>
        <button className='btn btn-danger'  onClick={() => onDelete(task.name)}>Borrar</button>
        <button
  className='btn btn-success'
  onClick={() => { onToggleComplete(task.name); confetti();}}>Completar</button>
      </td>
    </tr>
  );
};

export default TaskItem;
