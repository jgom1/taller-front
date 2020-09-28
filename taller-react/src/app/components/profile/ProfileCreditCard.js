import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-trash-fill cursor-pointer"
                                    fill="#df4759" xmlns="http://www.w3.org/2000/svg" onClick={() => removeCreditCard(index)}>
                                    <path fill-rule="evenodd"
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                </svg>
                            </div>
                        </div>
                    )
                }
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-2 px-0 mx-auto mt-auto text-dark shadow-none">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-caret-down-fill"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div className="card card-body text-left">
                        <form onSubmit={handleSubmit(profileCreditCardSubmit)}>
                            <div className="form-group">
                                <label for="creditCardHolder" className="mb-1">Titular</label>
                                <input type="text" className="form-control"
                                    name="creditCardHolder" id="creditCardHolder" ref={register({ required: true })} />
                            </div>
                            <div className="row m-0">
                                <div className="col-8 col-xl-12 px-0 pr-1 pr-xl-0">
                                    <div className="form-group">
                                        <label for="creditCardNumber" className="mb-1">Número</label>
                                        <input type="text" className="form-control"
                                            name="creditCardNumber" id="creditCardNumber" ref={register({ required: true })} />
                                    </div>
                                </div>
                                <div className="col-4 col-xl-12 px-0 pl-1 pl-xl-0">
                                    <div className="form-group">
                                        <label for="creditCardDate" className="mb-1">Fecha caducidad</label>
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