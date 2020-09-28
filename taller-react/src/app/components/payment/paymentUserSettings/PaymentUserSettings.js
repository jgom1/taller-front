import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { PaymentShippingDetails } from './PaymentShippingDetails';
import { PaymentShippingAddress } from './PaymentShippingAddress';
import { PaymentPayMode } from './PaymentPayMode';

export const PaymentUserSettings = ({ user, purchase }) => {
    return (
        <div className="col-12 col-xl-8 px-0 pr-xl-4">
            <div className="col-12 p-3 bg-light">
                <div className="row m-0">
                    <div className="col-12 col-md-5 px-0 pr-md-1 mb-3">
                        <div className="card m-0 p-3">
                            <p className="font-weight-bold">Datos de contacto</p>
                            <p className="mb-0">{user.userName} {user.userSurname}</p>
                            <p className="mb-0">{user.userEmail}</p>
                        </div>
                    </div>
                    <PaymentShippingDetails purchase={purchase} />
                    <PaymentShippingAddress user={user} purchase={purchase} />
                    <PaymentPayMode user={user} purchase={purchase} />
                </div>
            </div>
        </div>
    );
};