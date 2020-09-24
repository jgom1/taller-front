import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentPayMode = ({ user }) => {
    return (
        <div className="col-12 px-0 mb-3">
            <div className="card m-0 p-3">
                <p className="font-weight-bold">Seleccionar modo de pago:</p>
                <div className="row m-0 h6">
                    <div
                        className="col-12 col-md-4 px-0 form-check form-check-inline m-0 mb-2 justify-content-center">
                        <input className="form-check-input" type="radio" name="paymentOptions" id="paymentOption1"
                            value="option1" data-toggle="collapse" data-target="#collapsePaymentCards" checked />
                        <label className="form-check-label" for="paymentOption1">Tarjeta de crédito</label>
                    </div>
                    <div className="col-12 col-md-4 px-0 form-check form-check-inline m-0 mb-2 justify-content-center">
                        <input className="form-check-input" type="radio" name="paymentOptions" id="paymentOption2"
                            value="option2" />
                        <label className="form-check-label" for="paymentOption2">Paypal</label>
                    </div>
                    <div className="col-12 col-md-4 px-0 form-check form-check-inline m-0 justify-content-center">
                        <input className="form-check-input" type="radio" name="paymentOptions" id="paymentOption3"
                            value="option3" />
                        <label className="form-check-label" for="paymentOption3">Contra reembolso</label>
                    </div>
                </div>
                <div className="collapse"
                    id="collapsePaymentCards">
                    <div className="row m-0 mt-4">
                        <div className="col-12 col-sm-6 col-lg-4 px-0 px-sm-1 mb-2">
                            <div className="card text-left p-3 credit-card h-100">
                                <p className="mb-0 font-weight-bold">Persona</p>
                                <p className="mb-0">Numero</p>
                                <p className="mb-0 text-muted">Fecha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};