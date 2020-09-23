import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setUser, login } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const Registration = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();

    const handleCloseRegistrationModal = () => setShowRegistrationModal(false);
    const handleShowRegistrationModal = () => setShowRegistrationModal(true);

    const createUserObject = (formData) => {
        return {
            "userName": formData.registrationName,
            "userSurname": formData.registrationSurname,
            "userEmail": formData.registrationEmail,
            "userPassword": formData.registrationPassword,
        };
    }

    const createUser = async (formData) => {
        const res = await fetch(`http://localhost:3004/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createUserObject(formData))
        });
        res.json().then(res => {
            dispatch(setUser(res));
            dispatch(login());
            handleCloseRegistrationModal();
        });
    }

    async function fetchUser(formData) {
        const res = await fetch(`http://localhost:3004/users?userEmail=${formData.registrationEmail}`);
        res.json().then(res => {
            if (res.length === 0) {
                createUser(formData);
            } else {
                setErrorMessage('Ya existe un usuario con ese correo electrónico.');
            }
        });
    }

    const RegistrationSubmit = (formData) => {
        if (formData.registrationPassword !== formData.confirmedRegistrationPassword) {
            setErrorMessage('Las contraseñas deben coincidir.');
        } else {
            fetchUser(formData);
        }
    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-outline-light px-4 mr-2" onClick={handleShowRegistrationModal}>Registrarse</button>
            <Modal show={showRegistrationModal} onHide={handleCloseRegistrationModal}>
                <Modal.Body className="p-5 text-center">
                    <h2 className="mb-5">¡Bienvenido!</h2>
                    <form onSubmit={handleSubmit(RegistrationSubmit)}>
                        <div class="form-group">
                            <label htmlFor="registrationName" class="mb-1 h5">Nombre</label>
                            <input type="text" class="form-control" name="registrationName" id="registrationName" ref={register({ required: true })} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="registrationSurname" class="mb-1 h5">Apellidos</label>
                            <input type="text" class="form-control" name="registrationSurname" id="registrationSurname" ref={register({ required: true })} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="registrationEmail" class="mb-1 h5">Correo electrónico</label>
                            <input type="email" class="form-control" name="registrationEmail" id="registrationEmail" ref={register({ required: true })} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="registrationPassword" class="mb-1 h5">Contraseña</label>
                            <input type="password" class="form-control" name="registrationPassword" id="registrationPassword" ref={register({ required: true })} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="confirmedRegistrationPassword" class="mb-1 h5">Confirma la contraseña</label>
                            <input type="password" class="form-control" name="confirmedRegistrationPassword" id="confirmedRegistrationPassword" ref={register({ required: true })} />
                        </div>
                        {errorMessage && <p class="mb-0 text-danger small">{errorMessage}</p>}
                        <div class="row m-0 mt-5 justify-content-center">
                            <button type="button" class="col-4 btn btn-outline-danger mr-2" id="closeRegistrationModal" onClick={handleCloseRegistrationModal}>Cerrar</button>
                            <button type="submit" disabled={!formState.isValid} class="col-4 btn btn-dark ml-2">Registrarse</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};