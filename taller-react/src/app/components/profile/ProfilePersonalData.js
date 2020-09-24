import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from '../../../features/counter/counterSlice';


/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export const ProfilePersonalData = ({ user }) => {
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const dispatch = useDispatch();

    const profilePersonalDataSubmit = (formData) => {
        const altUser = {...user};
        altUser.userEmail = formData.personalEmail;
        dispatch(setUser(altUser));
    }

    return (
        <Accordion className="col-12 col-md-6 text-center p-2 d-flex justify-content-strench">
            <div className="border border-dark w-100 p-3 d-flex flex-column justify-content-strench">
                <h3 class="my-2">Mis datos personales</h3>
                <p class="mb-0">{user.userName} {user.userSurname}</p>
                <p>{user.userEmail}</p>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="col-2 px-0 mx-auto mt-auto text-dark shadow-none">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-caret-down-fill"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <div class="card card-body text-left">
                        <form onSubmit={handleSubmit(profilePersonalDataSubmit)}>
                            <div class="form-group">
                                <label for="personalEmail" class="mb-1">Nuevo email</label>
                                <input type="text" class="form-control" name="personalEmail" id="personalEmail" ref={register({ required: true })}/>
                            </div>
                            <div class="row m-0">
                                <button type="submit" disabled={!formState.isValid} class="btn btn-dark ml-auto">Cambiar email</button>
                            </div>
                        </form>
                    </div>
                </Accordion.Collapse>
            </div>
        </Accordion>
    );
};