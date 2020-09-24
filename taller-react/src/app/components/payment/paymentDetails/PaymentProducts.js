import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentProducts = ({ cart }) => {
    return (
        <div className="row m-0">
            <div className="col-md-6 col-xl-12 px-0 px-xl-0">
                <div className="card my-2 p-3">
                    <div className="row m-0 align-items-center">
                        <div className="col-12 col-sm-4 px-0 mb-2">
                            <img className="img-fluid" src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201909/30/00157063419600009_1__640x640.jpg" alt="producto" />
                        </div>
                        <div className="col-12 col-sm-8 px-0">
                            <p className="mb-0 font-weight-bold h4">Producto</p>
                            <p className="mb-2">Resumen</p>
                            <div
                                className="row m-0 pb-2 mb-2 text-right d-flex align-items-center justify-content-end border-bottom border-dark">
                                <span className="mb-0 mr-1 h4">100€</span>
                                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16"
                                    className="bi bi-trash-fill ml-1 cursor-pointer" fill="#df4759"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                </svg>
                            </div>
                            <div className="row m-0">
                                <div className="col-12 px-0 text-right font-weight-bold mb-0">
                                    <span className="text-muted">Total:</span> <span
                                        className="h3 ml-3">100€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};