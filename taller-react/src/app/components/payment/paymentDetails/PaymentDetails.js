import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { PaymentProducts } from './PaymentProducts';
import { PaymentTaxes } from './PaymentTaxes';
import { PaymentFinalPay } from './PaymentFinalPay';

export const PaymentDetails = ({ cart, user, purchase }) => {
    return (
        <div className="col-12 col-xl-4 px-0 pl-xl-4">
            <div className="col-12 px-3 pb-3 pt-2 text-center bg-light">
                <PaymentProducts cart={cart} />
                <PaymentTaxes cart={cart} purchase={purchase} />
                <PaymentFinalPay cart={cart} purchase={purchase} user={user} />
            </div>
        </div>
    );
};