import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectUser, selectPurchase } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { PaymentUserSettings } from './paymentUserSettings/PaymentUserSettings';
import { PaymentDetails } from './paymentDetails/PaymentDetails';

export const Payment = () => {
  const user = useSelector(selectUser);
  const purchase = useSelector(selectPurchase);
  const cart = useSelector(selectCart);

  return (
    <section className="row m-0">
      <PaymentUserSettings user={user} purchase={purchase} />
      <PaymentDetails cart={cart} purchase={purchase} user={user} />
    </section>
  );
};