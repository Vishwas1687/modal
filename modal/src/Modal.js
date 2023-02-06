import React from 'react';
import ReactDOM from 'react-dom/client';
import {createPortal} from 'react-dom';
import {FaTimes} from 'react-icons/fa'
import './Modal.css'
const Modal=({children,handleModalClose})=>{
     return createPortal(
        <>
          <div className="modal-overlay">
          </div>
          <div className="modal">
            <div>
                <span onClick={handleModalClose} className="close-btn"><FaTimes/></span>
            </div>
            <div className="modal-content">
                {children}
            </div>
          </div>
        </>,document.getElementById("portal")
     )
}

export default Modal