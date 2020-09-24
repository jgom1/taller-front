import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectUser } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { PaymentUserSettings } from './PaymentUserSettings';
import { PaymentDetails } from './PaymentDetails';

export const Payment = () => {
    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);
    return (
        <section className="row m-0">
            <PaymentUserSettings user={user} />
            <PaymentDetails cart={cart} />
        </section>
    );
};