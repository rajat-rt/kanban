import { createStore } from "redux";
import rootReducers from "./reducers";

import { KANBAN_BOARD_CACHE_KEY } from '../constant';

// convert object to string and store in localStorage
function saveToLocalStorage({ kanbanData }) {
    try {
        const serialisedState = JSON.stringify(kanbanData);
        localStorage.setItem(KANBAN_BOARD_CACHE_KEY, serialisedState);
    } catch (e) {
        console.warn(e);
    }
}
  
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem(KANBAN_BOARD_CACHE_KEY);
        if (serialisedState === null) return undefined;
        return { kanbanData: JSON.parse(serialisedState)};
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;