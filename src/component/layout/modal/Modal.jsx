
import React from 'react';
import './Modal.css';
import TableList from '../../ui/TableList';
function Modal({isOpen, onClose}) {

    if (!isOpen) return null;

    return (
        <div className="popup__overlay">
            <div className="popup__content">
                <h2>Detail Pesanan </h2>
                <div className="popup__content-wrapped">
                    <div className="popup__list">
                        <TableList />
                    </div>
                    <div className="popup__payment">
                        <div className='popup__title'>
                            <h3>Uang Pembeli (Rp)</h3>
                        </div>
                        <div className='popup__input'>
                            <input type="text" />
                        </div>
                        <div className='popup__button'>
                            <button onClick={onClose} className='popup__button-close'>Close</button>
                            <button className='btn'>Pay</button>
                        </div>
                        <div className='change'>
                            <p>Kembalian :</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal;