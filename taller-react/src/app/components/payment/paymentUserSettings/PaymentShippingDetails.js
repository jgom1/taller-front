import React from 'react';
import { useDispatch } from 'react-redux';
import { setPurchase } from '../../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentShippingDetails = ({ purchase }) => {

    const shippingDetails = [['Correos', 6.90], ['Mensajeria', 4.90]];
    const dispatch = useDispatch();

    const setShippingOption = (index) => {
        let altPurchase = { ...purchase };
        altPurchase.shippingDetails = {
            'shippingIndex': index,
            'shippingCompany': shippingDetails[index][0],
            'shippingPrice': shippingDetails[index][1]
        };
        dispatch(setPurchase(altPurchase));
    }
    return (
        <div className="col-12 col-md-7 px-0 pl-md-1 mb-3">
            <div className="card m-0 p-3 h-100">
                <p className="font-weight-bold">Seleccionar envío:</p>
                <div className="row m-0 justify-content-around h6">
                    <div className="form-check form-check-inline align-items-baseline">
                        <input type="radio" value="Correos" id="shippingOption1" name="shippingDetails" 
                            className="form-check-input cursor-pointer" onClick={() => setShippingOption(0)} defaultChecked={purchase.shippingDetails.shippingIndex !== 1}/>
                        <label className="form-check-label cursor-pointer" htmlFor="shippingOption1">
                            <span className="d-block">Correos</span>
                            <span className="d-block text-muted text-center">6,90€</span>
                        </label>
                    </div>
                    <div className="form-check form-check-inline align-items-baseline">
                        <input type="radio" value="Mensajeria" id="shippingOption2" name="shippingDetails"
                            className="form-check-input cursor-pointer" onClick={() => setShippingOption(1)} defaultChecked={purchase.shippingDetails.shippingIndex === 1}/>
                        <label className="form-check-label cursor-pointer" htmlFor="shippingOption2">
                            <span className="d-block">Empresa mensajería</span>
                            <span className="d-block text-muted text-center">4,90€</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};