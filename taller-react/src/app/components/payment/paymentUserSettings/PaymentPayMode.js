import React, { useState } from 'react';
import classNames from "classnames";
import { useDispatch } from 'react-redux';
import { setPurchase } from '../../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export const PaymentPayMode = ({ user, purchase }) => {
    const [selectedCreditCard, setSelectedCreditCard] = useState(0);
    const paymentModes = ['Credit card', 'Paypal', 'Cash'];
    const dispatch = useDispatch();

    const setPurchasePaymentMode = (paymentMode) => {
        let altPurchase = { ...purchase };
        altPurchase.paymentMode = paymentMode;
        dispatch(setPurchase(altPurchase));
    }

    const setPaymentMode = (paymentIndex) => {
        if (paymentIndex === 0) {
            setPurchasePaymentMode({
                'paymentMode': paymentModes[paymentIndex],
                'creditCard': user.userCreditCard[selectedCreditCard]
            });
        } else {
            setPurchasePaymentMode({ 'paymentMode': paymentModes[paymentIndex] });
        }
    }

    const selectCreditCard = (creditCardIndex) => {
        setSelectedCreditCard(creditCardIndex);
        setPaymentMode(0);
    }


    return (
        <div className="col-12 px-0 mb-3">
            <div className="card m-0 p-3">
                <p className="font-weight-bold">Seleccionar modo de pago:</p>
                <Accordion defaultActiveKey="0" className="row m-0 h6">
                    <div className="col-12 col-md-4 px-0 form-check form-check-inline m-0 mb-2 justify-content-center">
                        {(user.userCreditCard && user.userCreditCard.length > 0) &&
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="text-dark shadow-none" onClick={() => setPaymentMode(0)}>
                                <input className="form-check-input text-dark shadow-none cursor-pointer" type="radio" name="paymentOptions" id="paymentOption1"
                                    value="option1" defaultChecked />
                                <label className="form-check-label cursor-pointer text-dark shadow-none" htmlFor="paymentOption1">Tarjeta de crédito</label>
                            </Accordion.Toggle>
                        }
                    </div>
                    <div className="col-12 col-md-4 px-0 form-check form-check-inline m-0 justify-content-center">
                        <input className="form-check-input cursor-pointer" type="radio" name="paymentOptions" id="paymentOption2"
                            value="option2" onClick={() => setPaymentMode(1)} />
                        <label className="form-check-label cursor-pointer" htmlFor="paymentOption2">Paypal</label>
                    </div>
                    <div className="col-12 col-md-4 px-0 form-check form-check-inline m-0 justify-content-center">
                        <input className="form-check-input cursor-pointer" type="radio" name="paymentOptions" id="paymentOption3"
                            value="option3" onClick={() => setPaymentMode(2)} />
                        <label className="form-check-label cursor-pointer" htmlFor="paymentOption3">Contra reembolso</label>
                    </div>
                    {(user.userCreditCard && user.userCreditCard.length > 0) &&
                        <Accordion.Collapse eventKey='0' className="col" collapse="true">
                            <div className="row m-0 mt-4">
                                {user.userCreditCard.map((creditCard, index) =>
                                    <div key={index} className="col-12 col-sm-6 col-lg-4 px-0 px-sm-1 mb-2" onClick={() => selectCreditCard(index)}>
                                        <div className={classNames({
                                            'payment__credit-card--average': index !== selectedCreditCard,
                                            'payment__credit-card--selected': index === selectedCreditCard,
                                            'card': true, 'text-left': true, 'p-3': true, 'credit-card': true, 'h-100': true, 'cursor-pointer': true
                                        })}>
                                            <p>{index}</p>
                                            <p className="mb-0 font-weight-bold">{creditCard.userCreditCardHolder}</p>
                                            <p className="mb-0">{creditCard.userCreditCardNumber}</p>
                                            <p className="mb-0 text-muted">{creditCard.userCreditCardDate}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Accordion.Collapse>
                    }
                </Accordion>
            </div >
        </div >
    );
};