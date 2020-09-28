import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { BsFillCaretDownFill } from "react-icons/bs";

export const ProfilePersonalData = ({ user }) => {
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();

    const profilePersonalDataSubmit = (formData) => {
        const altUser = { ...user };
        altUser.userEmail = formData.personalEmail;
        dispatch(setUser(altUser));
    }

    return (
        <Accordion className="col-12 col-md-6 text-center p-2 d-flex justify-content-strench">
            <div className="border border-dark w-100 p-3 d-flex flex-column justify-content-strench">
                <h3 className="my-2">Mis datos personales</h3>
                <p className="mb-0">{user.userName} {user.userSurname}</p>
                <p>{user.userEmail}</p>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-2 px-0 mx-auto mt-auto text-dark shadow-none">
                    <BsFillCaretDownFill className='icon__size--2' />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div className="card card-body text-left">
                        <form onSubmit={handleSubmit(profilePersonalDataSubmit)}>
                            <div className="form-group">
                                <label htmlFor="personalEmail" className="mb-1">Nuevo email</label>
                                <input type="text" className="form-control" name="personalEmail" id="personalEmail" ref={register({ required: true })} />
                            </div>
                            <div className="row m-0">
                                <button type="submit" disabled={!formState.isValid} className="btn btn-dark ml-auto">Cambiar email</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};