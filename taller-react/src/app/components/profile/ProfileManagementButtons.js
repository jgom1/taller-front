import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const ProfileManagementButtons = ({ user }) => {
    const [showConfirmedDeleteModal, setShowConfirmedDeleteModal] = useState(false);
    const [showSavedChangesAlert, setShowSavedChangesAlert] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCloseConfirmedDeleteModal = () => setShowConfirmedDeleteModal(false);
    const handleShowConfirmedDeleteModal = () => setShowConfirmedDeleteModal(true);

    const removeAccount = async () => {
        const res = await fetch(`http://localhost:3004/users/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        res.json().then(res => {
            dispatch(logout());
            history.push('/products');
        });
    }

    const removeAccountEvent = () => {
        removeAccount();
    }

    const updateAccount = async () => {
        const res = await fetch(`http://localhost:3004/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        res.json().then(res => {
            setShowSavedChangesAlert(true);
        });
    }

    const updateAccountEvent = () => {
        updateAccount();
    }


    return (
        <React.Fragment>
            <div className="row m-0 pt-4 px-2 justify-content-end">
                <div className="col-8 col-sm-6 col-md-4 col-lg-3 px-0 mb-2 mb-sm-0 pr-sm-2 pl-lg-2">
                    <button type="button" className="btn btn-danger btn-block" onClick={handleShowConfirmedDeleteModal}>Eliminar cuenta</button>
                </div>
                <div className="col-8 col-sm-6 col-md-4 col-lg-3 px-0 mb-2 mb-sm-0 pl-sm-2">
                    <button type="button" className="px-0 btn btn-dark btn-block" onClick={updateAccountEvent}>Guardar cambios</button>
                </div>
            </div>


            <Modal show={showConfirmedDeleteModal} onHide={handleCloseConfirmedDeleteModal} className="modal fade" >
                <div className="modal-content p-5 text-center">
                    <p>Si eliminas tu cuenta perderás todos tus datos, no podrás acceder a tu historial de compras y lo que es peor...
                            no podrás seguir disfrutando de los mejores precios en tus productos favoritos...</p>
                    <div className="font-weight-bold mb-3">¿Estás seguro de quieres eliminar tu cuenta?</div>
                    <div className="row m-0 justify-content-center">
                        <button type="button" className="btn btn-success mb-3" onClick={handleCloseConfirmedDeleteModal}>No, quiero seguir en la página</button>
                        <button type="button" className="btn btn-danger" onClick={removeAccountEvent}>Sí, eliminar mi cuenta</button>
                    </div>
                </div>
            </Modal>


            {showSavedChangesAlert &&
                <div className="alert alert-success alert-dismissible fade show my-3 text-center" role="alert" >
                    <strong>Tus cambios han sido guardados correctamente.</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setShowSavedChangesAlert(false)} >
                        <span aria-hidden="true">&times;</span>
                    </button >
                </div >}
        </React.Fragment >
    );
};