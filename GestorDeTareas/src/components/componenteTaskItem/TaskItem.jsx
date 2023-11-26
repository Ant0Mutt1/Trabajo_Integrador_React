import React from 'react';
import { useState } from 'react';

const TaskItem = () => {

    const [taskItem, setTaskItem] = useState([
        { name: 'mi tarea', done: false }
    ]);
    return (
        <div>
             {
                        taskItem.map(task => (
                            <tr key={task.name}>
                                <td> {task.name}</td>
                            </tr>

                        ))
                    }
            
        </div>
    );
}

export default TaskItem;
