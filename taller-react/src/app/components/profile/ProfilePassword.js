import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
                <h3 class="my-2">Mi contraseña</h3>
                <p class="h3">{hidenPassword}</p>
                <Accordion.Toggle as={Button} variant='link' eventKey='0' className='col-2 px-0 mx-auto mt-auto text-dark shadow-none'>
                    <svg width='2em' height='2em' viewBox='0 0 16 16' className='bi bi-caret-down-fill'
                        fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                    </svg>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <div class="card card-body text-left">
                        <form onSubmit={handleSubmit(profilePasswordSubmit)}>
                            <div class="form-group">
                                <label for="currentProfilePassword" class="mb-1">Contraseña actual</label>
                                <input type="password" class="form-control"
                                    name="currentProfilePassword" id="currentProfilePassword" ref={register({ required: true })} />
                            </div>
                            <div class="row m-0">
                                <div class="col-6 col-xl-12 px-0 pr-1 pr-xl-0">
                                    <div class="form-group">
                                        <label for="newProfilePassword" class="mb-1">Nueva contraseña</label>
                                        <input type="password" class="form-control"
                                            name="newProfilePassword" id="newProfilePassword" ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div class="col-6 col-xl-12 px-0 pl-1 pl-xl-0">
                                    <div class="form-group">
                                        <label for="confirmedProfilePassword" class="mb-1">Confirma contraseña</label>
                                        <input type="password"
                                            class="form-control" name="confirmedProfilePassword" id="confirmedProfilePassword" ref={register({ required: true })} />
                                    </div>
                                </div>
                            </div>
                            {errorMessage && <p class="text-center text-danger small">{errorMessage}</p>}
                            <div class="row m-0">
                                <button type="submit" disabled={!formState.isValid}
                                    class="btn btn-dark ml-auto">Cambiar contraseña</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};