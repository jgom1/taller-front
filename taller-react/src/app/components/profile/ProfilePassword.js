import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { BsFillCaretDownFill } from "react-icons/bs";

export const ProfilePassword = ({ user }) => {
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    let hidenPassword = (user.userPassword) ? '*'.repeat(user.userPassword.length) : '';

    const profilePasswordSubmit = (formData) => {
        if (user.userPassword === formData.currentProfilePassword) {
            if (formData.newProfilePassword === formData.confirmedProfilePassword) {
                setErrorMessage('');
                const altUser = { ...user };
                altUser.userPassword = formData.newProfilePassword;
                dispatch(setUser(altUser));
            } else {
                setErrorMessage('Las nuevas contraseñas deben ser iguales');
            }
        } else {
            setErrorMessage('La contraseña introducida no coincide con la contraseña actual');
        }
    }

    return (
        <Accordion className='col-12 col-md-6 text-center p-2 d-flex justify-content-strench'>
            <div className='border border-dark w-100 p-3 d-flex flex-column justify-content-strench'>
                <h3 className="my-2">Mi contraseña</h3>
                <p className="h3">{hidenPassword}</p>
                <Accordion.Toggle as={Button} variant='link' eventKey='0' className='col-2 px-0 mx-auto mt-auto text-dark shadow-none'>
                    <BsFillCaretDownFill className='icon__size--2' />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <div className="card card-body text-left">
                        <form onSubmit={handleSubmit(profilePasswordSubmit)}>
                            <div className="form-group">
                                <label htmlFor="currentProfilePassword" className="mb-1">Contraseña actual</label>
                                <input type="password" className="form-control"
                                    name="currentProfilePassword" id="currentProfilePassword" ref={register({ required: true })} />
                            </div>
                            <div className="row m-0">
                                <div className="col-6 col-xl-12 px-0 pr-1 pr-xl-0">
                                    <div className="form-group">
                                        <label htmlFor="newProfilePassword" className="mb-1">Nueva contraseña</label>
                                        <input type="password" className="form-control"
                                            name="newProfilePassword" id="newProfilePassword" ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div className="col-6 col-xl-12 px-0 pl-1 pl-xl-0">
                                    <div className="form-group">
                                        <label htmlFor="confirmedProfilePassword" className="mb-1">Confirma contraseña</label>
                                        <input type="password"
                                            className="form-control" name="confirmedProfilePassword" id="confirmedProfilePassword" ref={register({ required: true })} />
                                    </div>
                                </div>
                            </div>
                            {errorMessage && <p className="text-center text-danger small">{errorMessage}</p>}
                            <div className="row m-0">
                                <button type="submit" disabled={!formState.isValid}
                                    className="btn btn-dark ml-auto">Cambiar contraseña</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};