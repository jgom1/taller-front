import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { BsFillCaretDownFill } from "react-icons/bs";

export const ProfileAddress = ({ user }) => {
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
    const dispatch = useDispatch();

    const profileAddressDataSubmit = (formData) => {
        const altUser = { ...user };
        altUser.userAddress = {
            'address': formData.address,
            'cp': formData.postalCode,
            'city': formData.city,
            'province': formData.province
        };
        dispatch(setUser(altUser));
    }

    return (
        <Accordion className='col-12 col-md-6 text-center p-2 d-flex justify-content-strench'>
            <div className='border border-dark w-100 p-3 d-flex flex-column justify-content-strench'>
                <h3 className='my-2'>Mi dirección</h3>
                {!user.userAddress && <p>Aún no tienes ninguna dirección guardada.</p>}
                {user.userAddress && <p className='mb-0'>{user.userAddress.address}</p>}
                {user.userAddress && <p>{user.userAddress.cp}, {user.userAddress.city}, {user.userAddress.province}</p>}
                <Accordion.Toggle as={Button} variant='link' eventKey='0' className='col-2 px-0 mx-auto mt-auto text-dark shadow-none'>
                    <BsFillCaretDownFill className='icon__size--2' />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                    <div className='card card-body text-left'>
                        <form onSubmit={handleSubmit(profileAddressDataSubmit)}>
                            <div className='form-group'>
                                <label htmlFor='address' className='mb-1'>Dirección</label>
                                <input type='text' className='form-control' name='address' id='address' ref={register({ required: true })} />
                            </div>
                            <div className='row m-0'>
                                <div className='col-12 col-xl-2 px-0 pr-1'>
                                    <div className='form-group'>
                                        <label htmlFor='postalCode' className='mb-1'>CP</label>
                                        <input type='text' className='form-control'
                                            name='postalCode' id='postalCode' ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div className='col-12 col-xl-5 px-0 pl-1 pr-1'>
                                    <div className='form-group'>
                                        <label htmlFor='city' className='mb-1'>Ciudad</label>
                                        <input type='text' className='form-control' name='city' id='city'
                                            ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div className='col-12 col-xl-5 px-0 pl-1'>
                                    <div className='form-group'>
                                        <label htmlFor='province' className='mb-1'>Provincia</label>
                                        <input type='text' className='form-control' name='province' id='province'
                                            ref={register({ required: true })} />
                                    </div>
                                </div>
                            </div>
                            <div className='row m-0'>
                                <button type='submit' disabled={!formState.isValid}
                                    className='btn btn-dark ml-auto'>Cambiar dirección</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};