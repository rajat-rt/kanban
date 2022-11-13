import { SHOW_MODAL, HIDE_MODAL } from '../types'

const initialState = {
    status: false,
    closeHandler: () => ({}),
    children: '',
    heading: 'Modal Heading'
};

export const modalState = (state=initialState, actions) => {
    switch(actions.type){
        case SHOW_MODAL:
            return {
                ...state,
                status: actions.payload.status,
                closeHandler: actions.payload.closeHandler,
                children: actions.payload.children,
                heading: actions.payload.heading,
            }
        case HIDE_MODAL: 
            return {
                ...state,
                status: false,
                childern : ''
            }
        default: 
            return {
                ...state
            }
    }
};