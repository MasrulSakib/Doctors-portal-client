import React from 'react';

const ConfirmationModal = ({ title, massege, closeModal, successDelete, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="remove-Doctor" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{massege}</p>
                    <div className="modal-action">
                        <label onClick={() => successDelete(modalData)} htmlFor="remove-Doctor" className="btn btn-accent">Confirm</label>
                        <button onClick={closeModal} className='btn btn-accent btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;