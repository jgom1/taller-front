import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setPurchase } from '../../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAccordionToggle } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const CustomToggle = ({ eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey);
    return (
        <div className="col-12 col-md-6 px-0 form-check form-check-inline m-0 justify-content-center">
            <input className="form-check-input" type="radio" name="addressOptions" id="addressOption2"
                value="newAddress" onClick={decoratedOnClick} />
            <label className="form-check-label" htmlFor="addressOption2">Enviar a otra dirección</label>
        </div>
    );
}

export const PaymentShippingAddress = ({ user, purchase }) => {

    const { register, handleSubmit, formState } = useForm({ mode: 'onChange' });
    const dispatch = useDispatch();

    const setPurchaseShippingAddress = (shippingAddress) => {
        let altPurchase = { ...purchase };
        altPurchase.shippingAddress = shippingAddress;
        dispatch(setPurchase(altPurchase));
    }

    const shippingAddressSubmit = (formData) => {
        setPurchaseShippingAddress(formData);
        document.getElementById('addressOption2').checked = true;
    }

    return (
        <div className="col-12 px-0 mb-3">
            <div className="card m-0 p-3">
                <p className="font-weight-bold">Dirección de evío:</p>
                <Accordion className="row m-0 h6">
                    <div className="col-12 px-0">
                        <div
                            className="col-12 col-md-6 px-0 form-check form-check-inline align-items-baseline m-0 mb-2 justify-content-center">
                            <input className="form-check-input" type="radio" name="addressOptions" id="addressOption1"
                                value="defaultAddress" onClick={() => setPurchaseShippingAddress(user.userAddress)} defaultChecked />
                            <label className="form-check-label" htmlFor="addressOption1">
                                <span className="d-block">{user.userAddress.address}</span>
                                <span className="d-block">{user.userAddress.cp}, {user.userAddress.city},
                                        {user.userAddress.province}</span>
                            </label>
                        </div>
                        <CustomToggle eventKey="0" />
                    </div>
                    <Accordion.Collapse eventKey='0'>
                        <form onSubmit={handleSubmit(shippingAddressSubmit)} className="card border-0 text-left mt-4 px-3">
                            <div className="form-group">
                                <label htmlFor="address" className="mb-1">Dirección</label>
                                <input type="text" className="form-control" name="address" id="address" ref={register} />
                            </div>
                            <div className="row m-0">
                                <div className="col-12 col-md-2 px-0 pr-md-2">
                                    <div className="form-group">
                                        <label htmlFor="cp" className="mb-1">CP</label>
                                        <input type="text" className="form-control" name="cp" id="cp" ref={register} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 px-0 px-md-1">
                                    <div className="form-group">
                                        <label htmlFor="city" className="mb-1">Ciudad</label>
                                        <input type="text" className="form-control" name="city" id="city" ref={register} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-5 px-0 pl-md-2">
                                    <div className="form-group">
                                        <label htmlFor="province" className="mb-1">Provincia</label>
                                        <input type="text" className="form-control" name="province" id="province" ref={register} />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <button type="submit" disabled={!formState.isValid} className="btn btn-dark ml-auto">Seleccionar dirección</button>
                            </div>
                        </form>
                    </Accordion.Collapse>
                </Accordion>
            </div>
        </div >
    );
};