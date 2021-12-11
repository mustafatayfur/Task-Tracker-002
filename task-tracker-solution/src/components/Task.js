import React from 'react';
import { FaTimes } from "react-icons";

const Task({task}) {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <FaTimes style={{color:"red"}}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;
