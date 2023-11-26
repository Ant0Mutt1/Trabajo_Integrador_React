import { useState } from 'react';
import React from 'react';
import TaskItem from '../componenteTaskItem/TaskItem';
import TaskForm from '../componenteTaskForm/TaskForm';

const TaskList = () => {



    return (
        <div>
            <TaskForm />
            <h1>Mis tareas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskItem />
                </tbody>
            </table>


        </div>

    );
}

export default TaskList;
