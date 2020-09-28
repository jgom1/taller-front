import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, setCart } from '../../../features/counter/counterSlice';
import classNames from "classnames";

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { FaShoppingCart } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";

export const ShoppingCart = () => {
    const [showShoppingCartModal, setShowShoppingCartModal] = useState(false);
    let cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCloseShoppingCartModal = () => setShowShoppingCartModal(false);
    const handleShowShoppingCartModal = () => setShowShoppingCartModal(true);

    const removeCartItem = (indexItem) => {
        cart = [...cart].filter((value, index) => index !== indexItem);
        dispatch(setCart(cart));
    }

    const goToPayment = () => {
        handleCloseShoppingCartModal();
        history.push('/payment');
    }

    return (
        <React.Fragment>
            <div className={classNames({
                'text-white': cart.length < 1,
                'text-success': cart.length > 0,
                'd-flex': true, 'align-items-center': true, 'cursor-pointer': true
            })}
                onClick={handleShowShoppingCartModal}>
                <FaShoppingCart className="ml-2 mr-1 mb-0 icon__size--2" />
                <Badge className={classNames({
                    'badge-light': cart.length < 1,
                    'badge-success': cart.length > 0,
                    'align-self-start': true
                })}>{cart.length}</Badge>
            </div>

            <Modal show={showShoppingCartModal} onHide={handleCloseShoppingCartModal}>
                <div className="modal-header bg-dark text-white justify-content-center px-5 py-3">
                    <h4 className="mb-0">Tu pedido</h4>
                    <button type="button" className="close" aria-label="Close" onClick={handleCloseShoppingCartModal}>
                        <span aria-hidden="true" className="text-white">&times;</span>
                    </button>
                </div>
                <div className="modal-body px-5 py-3 text-center">
                    {(cart.length < 1)
                        ?
                        <p className="h3 my-3 text-center">Aún no tienes ningún artículo en el carro.</p>
                        :
                        cart.map((product, index) =>
                            <div key={index} className="card flex-row m-0 my-2 p-3" >
                                <div className="col-10 px-0 d-flex flex-column justify-content-center align-items-start">
                                    <p className="mb-0 font-weight-bold h4">{product.productName}</p>
                                    <p className="mb-3">{product.productResume}</p>
                                    <p className="mb-0 h5">{product.productPrice}€</p>
                                </div>
                                <div className="col-2 px-0 d-flex align-items-center justify-content-center">
                                    <BsTrashFill className="ml-1 icon__size--1-3 cursor-pointer text-danger" onClick={() => removeCartItem(index)}/>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="modal-footer bg-dark px-5 py-3">
                    <button type="button" disabled={cart.length < 1} className="btn btn-success btn-block py-2" onClick={goToPayment}>Continuar</button>
                </div>
            </Modal>
        </React.Fragment >
    );
};