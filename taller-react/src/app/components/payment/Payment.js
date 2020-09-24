import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectUser } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { PaymentUserSettings } from './PaymentUserSettings';
import { PaymentDetails } from './PaymentDetails';

export const Payment = () => {
    // const user = useSelector(selectUser);
    const user = {
        "id": 1,
        "userName": "Juan",
        "userSurname": "Pérez",
        "userEmail": "juan-perez@correo.com",
        "userPassword": "abc123",
        "userCreditCard": [
          {
            "userCreditCardHolder": "Juan Pérez",
            "userCreditCardNumber": "1111111111111111",
            "userCreditCardDate": "01/2025"
          },
          {
            "userCreditCardHolder": "Juan Pérez",
            "userCreditCardNumber": "2222222222222222",
            "userCreditCardDate": "09/2023"
          }
        ],
        "userAddress": {
          "address": "C/Algo, n25, portal 1, 2 Dcha",
          "cp": "28001",
          "city": "Madrid",
          "province": "Madrid"
        }
      };

    const cart = useSelector(selectCart);
    return (
        <section className="row m-0">
            <PaymentUserSettings user={user} />
            <PaymentDetails cart={cart} />
        </section>
    );
};