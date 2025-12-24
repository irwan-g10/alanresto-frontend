
function AlertModal({ isOpenAlert, onClose, data }) {

    if (!isOpenAlert) return null;

    return (
        <div className="popup__overlay">
            <div className="popup__content">
                <h2>Success</h2>
                <p>Transaction has been saved successfully</p>
                <div className='popup__button'>
                    <button onClick={onClose} className='popup__button-close'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default AlertModal;