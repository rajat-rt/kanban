import { CREATE_LANE, DELETE_LANE, CREATE_TASK, DELETE_TASK, DRAG_AND_DROP_TASK } from '../types'

export const createNewLane = (payload) => {
    return {
        type: CREATE_LANE,
        payload
    }
};

export const deleteLane = (payload) => {
    return {
        type: DELETE_LANE,
        payload
    }
};

export const createTask = (payload) => {
    return {
        type: CREATE_TASK,
        payload
    }
};

export const deleteTask = (payload) => {
    return {
        type: DELETE_TASK,
        payload
    }
};

export const dragAndDropTaskUpdate = (payload) => {
    return {
        type: DRAG_AND_DROP_TASK,
        payload
    }
}