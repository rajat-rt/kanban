import { combineReducers } from 'redux';
import { kanbanData } from './kanbanReducers';
import { modalState } from './modalReducers';

const rootReducers = combineReducers({
    kanbanData,
    modalState
});

export default rootReducers;