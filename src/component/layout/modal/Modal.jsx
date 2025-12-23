
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
                        uang pembeli (Rp)
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <button onClick={onClose}>close</button>
                            <button>Pay</button>
                        </div>
                        <div>
                            Kembalian:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal;