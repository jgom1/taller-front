import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentShippingAddress = ({user}) => {
    return (
        <div className="col-12 px-0 mb-3">
            <div className="card m-0 p-3">
                <p className="font-weight-bold">Dirección de evío:</p>
                <div className="row m-0 h6">
                    <div className="col-12 px-0">
                        <div
                            className="col-12 col-md-6 px-0 form-check form-check-inline align-items-baseline m-0 mb-2 justify-content-center">
                            <input className="form-check-input" type="radio" name="addressOptions" id="addressOption1"
                                value="defaultAddress" checked />
                            <label className="form-check-label" for="addressOption1">
                                <span className="d-block">{user.userAddress.address}</span>
                                <span className="d-block">{user.userAddress.cp}, {user.userAddress.city},
                                        {user.userAddress.province}</span>
                            </label>
                        </div>
                        <div className="col-12 col-md-6 px-0 form-check form-check-inline m-0 justify-content-center">
                            <input className="form-check-input" type="radio" name="addressOptions" id="addressOption2"
                                value="newAddress" data-toggle="collapse" data-target="#collapseAddress" />
                            <label className="form-check-label" for="addressOption2">Enviar a otra dirección</label>
                        </div>
                    </div>
                </div>
                <div className="collapse" id="collapseAddress">
                    <div className="card border-0 text-left mt-4 px-3">
                        <div className="form-group">
                            <label for="address" className="mb-1">Dirección</label>
                            <input type="text" className="form-control" id="address" />
                        </div>
                        <div className="row m-0">
                            <div className="col-12 col-md-2 px-0 pr-md-2">
                                <div className="form-group">
                                    <label for="postalCode" className="mb-1">CP</label>
                                    <input type="text" className="form-control" id="postalCode" />
                                </div>
                            </div>
                            <div className="col-12 col-md-5 px-0 px-md-1">
                                <div className="form-group">
                                    <label for="city" className="mb-1">Ciudad</label>
                                    <input type="text" className="form-control" id="city" />
                                </div>
                            </div>
                            <div className="col-12 col-md-5 px-0 pl-md-2">
                                <div className="form-group">
                                    <label for="province" className="mb-1">Provincia</label>
                                    <input type="text" className="form-control" id="province" />
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <button type="button" className="btn btn-dark ml-auto">Seleccionar dirección</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};