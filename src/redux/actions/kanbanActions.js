import { CREATE_LANE, DELETE_LANE, UPDATE_STATE_FROM_CACHES, CREATE_TASK, DELETE_TASK } from '../types'

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

export const updateKanbanStateFromCache = (payload) => {
    return {
        type: UPDATE_STATE_FROM_CACHES,
        payload
    }
};