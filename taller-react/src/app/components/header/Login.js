import React, { useState } from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const Login = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger px-4 ml-2" onClick={handleShowLoginModal}>Entrar</button>
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Body className="p-5 text-center">
                    <h2 className="mb-5">¡Bienvenido!</h2>
                    <div className="form-group mt-5">
                        <label htmlFor="email" className="mb-1 h5">Correo electrónico</label>
                        <input type="email" className="form-control" id="loginEmail" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="mb-1 h5">Contraseña</label>
                        <input type="password" className="form-control" id="loginPassword" required />
                        <small className="form-text text-danger">Mensaje de error</small>
                    </div>
                    <div className="row m-0 mt-5 justify-content-center">
                        <button type="button" className="col-4 btn btn-outline-danger mr-2" data-dismiss="modal"
                            id="closeLoginModal" onClick={handleCloseLoginModal}>Cerrar</button>
                        <button type="submit" className="col-4 btn btn-dark ml-2">Entrar</button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};