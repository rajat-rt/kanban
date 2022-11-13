/**
 * This is the reusable component which is bootstrap by the redux state
 * if anyone wants to show the modal, they have to trigger the actions 
 * with required values and the modal is good to display on the top of
 * the APP.
 */

import React from 'react';
import { useSelector } from 'react-redux';

const Modal = () => {
    const state = useSelector(state => state.modalState);

    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <div className='modal-heading'>{state.heading}</div>
                <div className='modal-container'>{state.children}</div>
                <div>
                    <button className='close-btn' onClick={state.closeHandler}>X</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;