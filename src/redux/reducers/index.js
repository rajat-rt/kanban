import { combineReducers } from 'redux';
import { kanbanData } from './kanban_reducers';

const rootReducers = combineReducers({
    kanbanData
});

export default rootReducers;