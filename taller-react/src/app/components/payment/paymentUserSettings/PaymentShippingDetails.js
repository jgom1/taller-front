import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentShippingDetails = () => {
    return (
        <div className="col-12 col-md-7 px-0 pl-md-1 mb-3">
            <div className="card m-0 p-3 h-100">
                <p className="font-weight-bold">Seleccionar envío:</p>
                <div className="row m-0 justify-content-around h6">
                    <div className="form-check form-check-inline align-items-baseline">
                        <input type="radio" value="Correos" name="shippingOptions"
                            id="shippingOption1" className="form-check-input" />
                        <label className="form-check-label" for="shippingOption1">
                            <span className="d-block">Correos</span>
                            <span className="d-block text-muted text-center">6,90€</span>
                        </label>
                    </div>
                    <div className="form-check form-check-inline align-items-baseline">
                        <input type="radio" value="Mensajeria" name="shippingOptions"
                            id="shippingOption2" className="form-check-input" />
                        <label className="form-check-label" for="shippingOption2">
                            <span className="d-block">Empresa mensajería</span>
                            <span className="d-block text-muted text-center">4,90€</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};