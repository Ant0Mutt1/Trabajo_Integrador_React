import { useState } from 'react';
import React from 'react';
import TaskItem from '../componenteTaskItem/TaskItem';
import TaskForm from '../componenteTaskForm/TaskForm';

const TaskList = () => {

    const [taskItem, setTaskItem] = useState([
        { name: 'mi tarea', done: false }
    ]);

    return (
        <div>
            <TaskForm />
            <h1>Mis tareas</h1>
            <TaskItem />
            <table>
                <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskItem.map(task => (
                            <tr key={task.name}>
                                <td> {task.name}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>


        </div>

    );
}

export default TaskList;
