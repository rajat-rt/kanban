/**
 * This is a reusable component which we will use to get the 
 * Lane details/Task details from user while creation of lane
 * and task..
 * @props: type : task/lane
 */

import React, { useState } from 'react';
import { TASK_TYPE } from '../../constant';

const CreateLaneForm = ({ saveHandler, type, laneInfo }) => {

    const [name, setName] = useState('');
    const [task, setTask] = useState(TASK_TYPE[0]);

    const saveHandlerExecutor = () => {
        if(type === 'task'){
            saveHandler({laneId: laneInfo.id, name, type: task });
        } else {
            saveHandler({ name });
        }
    }

    return (
        <div className='create-lane-form'>
            <div className='lane-container'>
                <input type="text" placeholder={type ==='lane'? "Enter Lane Name": "Enter Task Name"} value={name} onChange={({ target: {value}}) => setName(value)}/>
                {type === 'task' ? 
                    (<div className='task-lane-wrapper'>
                        <label>Type</label>
                        <select onChange={({ target: {value}}) => setTask(value)}>
                            {TASK_TYPE.map(t => {
                                return (<option value={t}>{t}</option>)
                            })}
                        </select>
                    </div>)
                    : ''
                }
            </div>
            <button className='create-lane-btn' onClick={saveHandlerExecutor}>Save</button>
        </div>
    );
};

CreateLaneForm.defaultProps = {
    type: 'lane'
};

export default CreateLaneForm;