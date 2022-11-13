import {
    CREATE_LANE,
    DELETE_LANE,
    CREATE_TASK,
    DELETE_TASK,
    DRAG_AND_DROP_TASK
} from '../types' 

const initialState = {
    laneData: []
};

export const kanbanData = ( state=initialState, actions) => {

    switch(actions.type){
        case CREATE_LANE:
            return {
                ...state,
                laneData: [...state.laneData, actions.payload]
            }
        case DELETE_LANE:
            return {
                ...state,
                laneData: state.laneData.filter(({ id }) => id !== actions.payload)
            }
        case CREATE_TASK:
            const index = state.laneData.findIndex(({ id }) => actions.payload.laneId === id)
            state.laneData[index].cardArr.push(actions.payload)
            return {
                ...state
            }
        case DELETE_TASK: 
            const laneIndex = state.laneData.findIndex(({ id }) => actions.payload.laneId === id)
            state.laneData[laneIndex].cardArr = state.laneData[laneIndex].cardArr.filter(({ taskId }) => taskId !== actions.payload.taskId)
            return {
                ...state
            }
        case DRAG_AND_DROP_TASK: 
            let res = updateTask(actions.payload, state);
            return {
                ...res
            }
        default: 
            return {
                ...state
            }
    }
}

const updateTask = ({destLaneId, srcData}, state) => {
    // first delete 
    let srcIndex = state.laneData.findIndex(({ id }) => id === srcData.laneId);
    state.laneData[srcIndex].cardArr = state.laneData[srcIndex].cardArr.filter(({taskId}) => srcData.taskId !== taskId );

    // now add
    let destIndex = state.laneData.findIndex(({ id }) => id === destLaneId);
    srcData.laneId = destLaneId;
    state.laneData[destIndex].cardArr.push(srcData);
    return state;
}