/**
 * This is the main component which is used to render all the lane 
 * and all the business logic for updation of state executed from here!!!
 */

import { useDispatch, useSelector } from 'react-redux';

import { showModal, hideModal } from '../../redux/actions/modalActions';
import { createNewLane, deleteLane, createTask, deleteTask, dragAndDropTaskUpdate } from '../../redux/actions/kanbanActions';
import { drop, allowDrop } from '../../services/dragAndDropServices';

import CreateLaneForm from '../createLaneForm/createLaneForm'
import TaskCard from '../taskCard/taskCard'

const KanbanBoard = () => { 
    
    const state = useSelector(state => state.kanbanData);
    const dispatch = useDispatch();

    const createLaneHandler = ({ name }) => {
        // updating state for creating lane...
        let laneObj = {
            name,
            cardArr : [],
            id: `lane-id-${new Date().getTime()}`
        }
        dispatch(createNewLane(laneObj));
        dispatch(hideModal());
    }

    const createLane = () => {
        dispatch(showModal({
            status: true,
            closeHandler: () => dispatch(hideModal()),
            heading: 'Create Lane...',
            children: <CreateLaneForm saveHandler={createLaneHandler} type='lane'></CreateLaneForm>
        }));
    }

    const createTaskHandler = (laneObj) => {
        laneObj = {
            ...laneObj,
            taskId: `task-id-${new Date().getTime()}`
        };
        dispatch(createTask(laneObj));
        dispatch(hideModal());
    }

    const removeTaskHandler = ({taskId, laneId}) => {
        dispatch(deleteTask({ laneId, taskId}));
    }

    const createNewTask = (laneInfo) => {
        dispatch(showModal({
            status: true,
            closeHandler: () => dispatch(hideModal()),
            heading: 'Create New Task.',
            children: <CreateLaneForm saveHandler={createTaskHandler} type='task' laneInfo={laneInfo}></CreateLaneForm>
        }));
    }

    const dropHandler = (e) => {
        let result = drop(e);
        dispatch(dragAndDropTaskUpdate(result)); 
    };

    return (
        <div className="lane-wrapper">
            {state.laneData.map((laneInfo, index) => {
                return (
                    <div className='lane-list-wrapper' key={laneInfo.id} id={laneInfo.id} onDrop={dropHandler} onDragOver={(e) => allowDrop(e)}>
                        <div className='lane-heading'>{`${laneInfo.name} (${laneInfo.cardArr.length})`}</div>
                        <button className='lane-close-btn' onClick={() => dispatch(deleteLane(laneInfo.id))}>X</button>
                        <div className="lane-list">
                            {laneInfo.cardArr.map(card => {
                                return (
                                    <TaskCard key={card.id} cardInfo={card} removeTask={removeTaskHandler}></TaskCard>
                                )
                            })}
                        </div>
                        {index === 0 ? <button className="new-task-btn" onClick={() => createNewTask(laneInfo)}>Create new task</button>: ''}
                    </div>
                )
            })} 
            <div className="lane-list-wrapper">
                <div className='lane-heading'>Create new lane...</div>
                <button className="new-lane-btn" onClick={createLane}>+</button>
            </div>
        </div>
    );
};

export default KanbanBoard;