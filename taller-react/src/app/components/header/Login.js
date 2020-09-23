import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setUser, login } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const Login = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    async function fetchUser(formData) {
        const res = await fetch(`http://localhost:3004/users?userEmail=${formData.loginEmail}`);
        res.json().then(res => {
            if (res.length > 0) {
                setErrorMessage('');
                if (res[0].userPassword === formData.loginPassword) {
                    dispatch(setUser(res[0]));
                    dispatch(login());
                    handleCloseLoginModal();
                } else {
                    setErrorMessage('Los datos introducidos no son correctos.');
                }
            } else {
                setErrorMessage('No existe nigún usuario con ese correo electrónico.');
            }
        });
    }

    const loginSubmit = (formData) => {
        fetchUser(formData);
    }


    return (
        <React.Fragment>
            <button type="button" className="btn btn-danger px-4 ml-2" onClick={handleShowLoginModal}>Entrar</button>
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Body className="p-5 text-center">
                    <h2 className="mb-5">¡Bienvenido!</h2>
                    <form onSubmit={handleSubmit(loginSubmit)}>
                        <div className="form-group mt-5">
                            <label htmlFor="email" className="mb-1 h5">Correo electrónico</label>
                            <input type="email" className="form-control" name="loginEmail" id="loginEmail" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="mb-1 h5">Contraseña</label>
                            <input type="password" className="form-control" name="loginPassword" id="loginPassword" ref={register({ required: true })} />
                        </div>
                        {errorMessage && <p class="mb-0 text-danger small">{errorMessage}</p>}
                        <div className="row m-0 mt-5 justify-content-center">
                            <button type="button" className="col-4 btn btn-outline-danger mr-2"
                                id="closeLoginModal" onClick={handleCloseLoginModal}>Cerrar</button>
                            <button type="submit" disabled={!formState.isValid} className="col-4 btn btn-dark ml-2">Entrar</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};