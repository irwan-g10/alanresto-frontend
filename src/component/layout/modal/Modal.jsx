
import React, { useEffect, useState } from 'react';
import './Modal.css';
import TableList from '../../ui/TableList';
function Modal({ isOpen, onClose, data }) {
    const [change, setChange] = React.useState(0);
    const [buyerMoney, setBuyerMoney] = React.useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(()=> {
        if (data && data.length > 0) {
            const total = data.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
            setGrandTotal(total);
        }
    })    

    const handleInputChange = (e) => {
        setTimeout(() => {
            setBuyerMoney(e.target.value);
        }, 2000); 
    };
    console.log(grandTotal)


    if (!isOpen) return null;

    return (
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
                            <input type="text" onChange={handleInputChange}/>
                        </div>
                        <div className='popup__button'>
                            <button onClick={onClose} className='popup__button-close'>Close</button>
                            <button className='btn'>Pay</button>
                        </div>
                        <div className='change'>
                            <p>Kembalian : {buyerMoney - grandTotal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal;