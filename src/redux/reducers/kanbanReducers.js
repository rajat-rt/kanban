import { CREATE_LANE, DELETE_LANE, UPDATE_STATE_FROM_CACHES, CREATE_TASK, DELETE_TASK } from '../types' 

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
        case UPDATE_STATE_FROM_CACHES: 
            return {
                laneData: actions.payload
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
        default: 
            return {
                ...state
            }
    }
}