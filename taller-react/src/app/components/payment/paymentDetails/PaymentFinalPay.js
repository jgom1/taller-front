import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentFinalPay = ({ cart }) => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-block"
                data-toggle="modal" data-target="#successfulPurchaseModal">
                <span className="h3">PAGAR</span>
            </button>

            <div className="modal fade" id="successfulPurchaseModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body p-5 text-center">
                            <h2 className="my-5">Tu compra ha sido realizada correctamente</h2>
                            <button type="button" className="col-4 btn btn-success mx-auto" data-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};