/** 
 * This component is used to display the task 
 * in the lane.
 */

import React from 'react';
import { drag } from '../../services/dragAndDropServices';

const TaskCard = ({ cardInfo, removeTask }) => {

    return (
        <div className='task-wrapper' id={cardInfo.taskId} draggable="true" onDragStart={(e) => drag(e, cardInfo)} >
            <div className='type'>
                <div className={cardInfo.type}></div>
                <span className={cardInfo.type}>{cardInfo.type}</span>
            </div>
            <div className='heading'>{cardInfo.name}</div>
            <button className='task-btn' onClick={() => removeTask(cardInfo)}>x</button>
        </div>
    );
};

export default TaskCard;