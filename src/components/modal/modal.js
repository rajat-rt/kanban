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