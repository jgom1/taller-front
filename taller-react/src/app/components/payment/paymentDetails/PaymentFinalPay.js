import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setCart } from '../../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const PaymentFinalPay = ({ cart, purchase, user }) => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const getFormatedDate = () => {
        const currentDate = new Date();
        return `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    }

    const getTotalPayment = () => {
        let totalPayment = 0;
        cart.map((product) => totalPayment += product.productPrice);
        totalPayment += purchase.shippingDetails.shippingPrice;
        return Math.round((totalPayment * 1.21) * 100) / 100;
    }

    const handleClosePaymentModal = () => setShowPaymentModal(false);

    const savePurchase = async (purchaseData) => {
        const res = await fetch(`http://localhost:3004/purchases`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(purchaseData)
        });
        res.json().then(res => {
            setShowPaymentModal(true);
        });
    }

    const handleShowPaymentModal = () => {
        const purchaseObject = {
            'userId': user.id,
            'purchaseDate': getFormatedDate(),
            'purchaseProducts': cart,
            'purchaseShipping': {
                'purchaseShippingName': purchase.shippingDetails.shippingCompany,
                'purchaseShippingPayment': purchase.shippingDetails.shippingPrice
            },
            'purchasePayment': getTotalPayment(),
            'purchaseState': 'Procesado'
        };
        savePurchase(purchaseObject);
    };

    const cleanCartAndNavigate = () => {
        dispatch(setCart([]));
        history.push('/purchases');
    }

    return (
        <React.Fragment>
            <button type="button" onClick={handleShowPaymentModal} disabled={cart.length < 1}
                className={classNames({
                    'btn-secondary': cart.length < 1,
                    'btn-success': cart.length > 0,
                    'btn': true, 'btn-block': true
                })}>
                <span className="h3">PAGAR</span>
            </button>
            <Modal show={showPaymentModal} onHide={handleClosePaymentModal}>
                <Modal.Body className="p-5 text-center">
                    <h2 className="my-5">Tu compra ha sido realizada correctamente</h2>
                    <button type="button" className="col-4 btn btn-success mx-auto" onClick={cleanCartAndNavigate}>Aceptar</button>
                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
};