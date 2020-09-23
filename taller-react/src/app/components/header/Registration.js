import React, { useState } from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const Registration = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    const handleCloseRegistrationModal = () => setShowRegistrationModal(false);
    const handleShowRegistrationModal = () => setShowRegistrationModal(true);

    return (
        <React.Fragment>
            <button type="button" className="btn btn-outline-light px-4 mr-2" onClick={handleShowRegistrationModal}>Registrarse</button>
            <Modal show={showRegistrationModal} onHide={handleCloseRegistrationModal}>
                <Modal.Body className="p-5 text-center">
                    <h2 className="mb-5">¡Bienvenido!</h2>
                    <div class="form-group">
                        <label htmlFor="registrationName" class="mb-1 h5">Nombre</label>
                        <input type="text" class="form-control" id="registrationName" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="registrationSurname" class="mb-1 h5">Apellidos</label>
                        <input type="text" class="form-control" id="registrationSurname" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="registrationEmail" class="mb-1 h5">Correo electrónico</label>
                        <input type="email" class="form-control" id="registrationEmail" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="registrationPassword" class="mb-1 h5">Contraseña</label>
                        <input type="password" class="form-control" id="registrationPassword" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="confirmedRegistrationPassword" class="mb-1 h5">Confirma la contraseña</label>
                        <input type="password" class="form-control" id="confirmedRegistrationPassword" required />
                    </div>
                    <p class="mb-0 text-danger">Mensaje de error</p>
                    <div class="row m-0 mt-5 justify-content-center">
                        <button type="button" class="col-4 btn btn-outline-danger mr-2" id="closeRegistrationModal" onClick={handleCloseRegistrationModal}>Cerrar</button>
                        <button type="submit" class="col-4 btn btn-dark ml-2">Registrarse</button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};