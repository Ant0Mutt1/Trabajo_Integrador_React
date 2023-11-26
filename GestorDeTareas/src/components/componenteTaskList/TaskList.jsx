import React from 'react';
import TaskItem from '../componenteTaskItem/TaskItem';
import TaskForm from '../componenteTaskForm/TaskForm';

const TaskList = () => {
    return (
        <div>
            <h1>...Acá va la Lista de tareas...</h1>
            <TaskItem/>
            <TaskForm/>
        </div>
       
    );
}

export default TaskList;
