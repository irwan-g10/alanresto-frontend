
import React, { useState } from 'react';
import './Modal.css';
import TableList from '../../ui/TableList';
import AlertModal from './AlertModal';
function Modal({ isOpenCheckout, onClose, data, grandTotal }) {
    const [buyerMoney, setBuyerMoney] = React.useState(0);
    const [isOpenAlert, setIsOpenAlert] = useState(false)



    const handleInputChange = (e) => {
        setBuyerMoney(e.target.value);
    };

    const togglePopupAlert = () => {
        setIsOpenAlert(!isOpenAlert)
    }

    if (!isOpenCheckout) return null;

    return (
        <>
            <div className="popup__overlay">
                <div className="popup__content">
                    <h2>Detail Pesanan </h2>
                    <div className="popup__content-wrapped">
                        <div className="popup__list">
                            <TableList data={data} />
                        </div>
                        <div className="popup__payment">
                            <div className='popup__title'>
                                <h3>Uang Pembeli (Rp)</h3>
                            </div>
                            <div className='popup__input'>
                                <input type="text" onChange={handleInputChange} />
                            </div>
                            <div className='popup__button'>
                                <button onClick={onClose} className='popup__button-close' >Close</button>
                                <button className='btn' onClick={togglePopupAlert}>Pay</button>
                            </div>
                            <div className='change'>
                                <p>Kembalian : {buyerMoney - grandTotal}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpenAlert && (
                <AlertModal isOpenAlert={isOpenAlert} onClose={onClose} />
            )}
        </>
    )

}

export default Modal;