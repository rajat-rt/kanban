import React from 'react';

const TaskCard = ({ cardInfo, removeTask }) => {

    return (
        <div className='task-wrapper'>
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