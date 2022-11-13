import { SHOW_MODAL, HIDE_MODAL } from '../types';

export const showModal = (modalObj) => {
    return {
        type: SHOW_MODAL,
        payload: modalObj
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL,
    }
}