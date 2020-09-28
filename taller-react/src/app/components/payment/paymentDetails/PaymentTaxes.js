import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const PaymentTaxes = ({ cart, purchase }) => {
    let totalPayment = 0;

    const getProductsTotalPrice = () => {
        let productsTotalPrice = 0;
        cart.map((product) => {
            productsTotalPrice += product.productPrice;
        });
        return productsTotalPrice;
    }

    const getTotalPayment = () => {
        totalPayment = (cart.length > 0) ? getProductsTotalPrice() + purchase.shippingDetails.shippingPrice : 0;
    }

    getTotalPayment();

    return (
        <React.Fragment>
            <div className="row m-0">
                <div className="col-12 col-md-6 col-xl-12 px-0 pr-md-2 px-xl-0">
                    <div className="card flex-row m-0 my-2 p-3">
                        <div className="col-6 px-0 text-left">
                            <p className="mb-0 font-weight-bold">Envío:</p>
                        </div>
                        <div className="col-6 px-0 text-right">
                            <p className="mb-0 font-weight-bold">{(purchase.shippingDetails && purchase.shippingDetails.shippingCompany) ? purchase.shippingDetails.shippingCompany : ''}</p>
                            <p className="mb-0 h4">{(purchase.shippingDetails && purchase.shippingDetails.shippingPrice) ? purchase.shippingDetails.shippingPrice : ''}€</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12 px-0 pl-md-2 px-xl-0">
                    <div className="card flex-row m-0 my-2 p-3">
                        <div className="col-6 px-0 text-left">
                            <p className="mb-0 font-weight-bold">IVA (21%):</p>
                        </div>
                        <div className="col-6 px-0 text-right">
                            <p className="mb-0">Importe</p>
                            <p className="mb-0 h4">{Math.round((totalPayment * 0.21) * 100) / 100}€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card flex-row bg-dark sflex-row m-0 my-2 p-3 h4 text-white">
                <div className="col-6 px-0 text-left">
                    <p className="mb-0">TOTAL</p>
                </div>
                <div className="col-6 px-0 text-right">
                    <p className="mb-0">{Math.round((totalPayment * 1.21) * 100) / 100}€</p>
                </div>
            </div>
        </React.Fragment>
    );
};