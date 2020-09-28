import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { BsFillCaretDownFill, BsTrashFill } from "react-icons/bs";

export const ProfileCreditCard = ({ user }) => {
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();

    const profileCreditCardSubmit = (formData) => {
        const altUser = { ...user };
        const newCreditCardObject = {
            'userCreditCardHolder': formData.creditCardHolder,
            'userCreditCardNumber': formData.creditCardNumber,
            'userCreditCardDate': formData.creditCardDate
        };
        altUser.userCreditCard = [...altUser.userCreditCard, newCreditCardObject];
        dispatch(setUser(altUser));
    }

    const removeCreditCard = (indexItem) => {
        const altUser = { ...user };
        altUser.userCreditCard = [...altUser.userCreditCard].filter((value, index) => index !== indexItem);
        dispatch(setUser(altUser));
    }

    return (
        <Accordion className="col-12 col-md-6 text-center p-2 d-flex justify-content-strench">
            <div className="border border-dark w-100 p-3 d-flex flex-column justify-content-strench">
                <h3 className="my-2">Mis tarjetas</h3>
                {(!user.userCreditCard || user.userCreditCard.length < 1) && <p>No tienes tarjetas guardadas.</p>}
                {user.userCreditCard &&
                    user.userCreditCard.map((card, index) =>
                        <div className="card flex-row my-2 p-3">
                            <div className="col-10 px-0 d-flex flex-column justify-content-center align-items-start">
                                <p className="mb-0 font-weight-bold">{card.userCreditCardHolder}</p>
                                <p className="mb-0">{card.userCreditCardNumber}</p>
                                <p className="mb-0 text-muted">{card.userCreditCardDate}</p>
                            </div>
                            <div className="col-2 px-0 d-flex align-items-center justify-content-center">
                                <BsTrashFill className="icon__size--1-3 cursor-pointer text-danger" onClick={() => removeCreditCard(index)} />
                            </div>
                        </div>
                    )
                }
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-2 px-0 mx-auto mt-auto text-dark shadow-none">
                    <BsFillCaretDownFill className='icon__size--2' />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div className="card card-body text-left">
                        <form onSubmit={handleSubmit(profileCreditCardSubmit)}>
                            <div className="form-group">
                                <label htmlFor="creditCardHolder" className="mb-1">Titular</label>
                                <input type="text" className="form-control"
                                    name="creditCardHolder" id="creditCardHolder" ref={register({ required: true })} />
                            </div>
                            <div className="row m-0">
                                <div className="col-8 col-xl-12 px-0 pr-1 pr-xl-0">
                                    <div className="form-group">
                                        <label htmlFor="creditCardNumber" className="mb-1">Número</label>
                                        <input type="text" className="form-control"
                                            name="creditCardNumber" id="creditCardNumber" ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div className="col-4 col-xl-12 px-0 pl-1 pl-xl-0">
                                    <div className="form-group">
                                        <label htmlFor="creditCardDate" className="mb-1">Fecha caducidad</label>
                                        <input type="text" className="form-control"
                                            name="creditCardDate" id="creditCardDate" ref={register({ required: true })} />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <button type="submit" disabled={!formState.isValid}
                                    className="btn btn-dark ml-auto">Guardar tarjeta</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div >
        </Accordion >
    );
};