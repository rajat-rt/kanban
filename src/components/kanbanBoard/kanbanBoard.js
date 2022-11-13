import { useDispatch, useSelector } from 'react-redux';

import { showModal, hideModal } from '../../redux/actions/modalActions';
import { createNewLane, deleteLane, createTask, deleteTask } from '../../redux/actions/kanbanActions';

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
            id: new Date().getTime()
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
            taskId: new Date().getTime()
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
    return (
        <div className="lane-wrapper">
            {state.laneData.map((laneInfo, index) => {
                return (
                    <div className='lane-list-wrapper' key={laneInfo.id}>
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