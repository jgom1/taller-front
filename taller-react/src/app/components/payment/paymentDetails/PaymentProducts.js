import React from 'react';
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setCart } from '../../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrashFill } from "react-icons/bs";

export const PaymentProducts = ({ cart }) => {
    const dispatch = useDispatch();

    const removeCartItem = (indexItem) => {
        cart = [...cart].filter((value, index) => index !== indexItem);
        dispatch(setCart(cart));
    }

    return (
        <div className="row m-0">
            {cart.map((product, index) =>
                <div key={index} className={classNames({
                    'pr-md-2': (index === 0 || index % 2 === 0),
                    'pl-md-2': (index > 0 && index % 2 !== 0),
                    'col-md-6': true, 'col-xl-12': true, 'px-0': true, 'px-xl-0': true
                })}>
                    <div className="card my-2 p-3">
                        <div className="row m-0 align-items-center">
                            <div className="col-12 col-sm-4 px-0 mb-2">
                                <img className="img-fluid" src={product.productImage} alt={product.productName} />
                            </div>
                            <div className="col-12 col-sm-8 px-0">
                                <p className="mb-0 font-weight-bold h4">{product.productName}</p>
                                <p className="mb-2">{product.productResume}</p>
                                <div
                                    className="row m-0 pb-2 mb-2 text-right d-flex align-items-center justify-content-end border-bottom border-dark">
                                    <span className="mb-0 mr-1 h4">{product.productPrice}€</span>
                                    <BsTrashFill className="ml-1 icon__size--1-3 cursor-pointer text-danger" onClick={() => removeCartItem(index)} />
                                </div>
                                <div className="row m-0">
                                    <div className="col-12 px-0 text-right font-weight-bold mb-0">
                                        <span className="text-muted">Total:</span> <span
                                            className="h3 ml-3">{product.productPrice}€</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </div >
    );
};