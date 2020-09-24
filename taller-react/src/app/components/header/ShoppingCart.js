import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

export const ShoppingCart = () => {
    const [showShoppingCartModal, setShowShoppingCartModal] = useState(false);
    const cart = useSelector(selectCart);

    const handleCloseShoppingCartModal = () => setShowShoppingCartModal(false);
    const handleShowShoppingCartModal = () => setShowShoppingCartModal(true);

    return (
        <React.Fragment>
            <div className="d-flex align-items-center cursor-pointer" onClick={handleShowShoppingCartModal}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart-fill ml-2 mb-0"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <Badge className="align-self-start" variant="light">{cart.length}</Badge>
            </div>

            <Modal show={showShoppingCartModal} onHide={handleCloseShoppingCartModal}>
                <div className="modal-header bg-dark text-white justify-content-center px-5 py-3">
                    <h4 className="mb-0">Tu pedido</h4>
                    <button type="button" className="close" aria-label="Close" onClick={handleCloseShoppingCartModal}>
                        <span aria-hidden="true" className="text-white">&times;</span>
                    </button>
                </div>
                <div className="modal-body px-5 py-3 text-center">
                    {cart.length < 1 && <p className="h3 my-3 text-center">Aún no tienes ningún artículo en el carro.</p>}

                    <div className="card flex-row m-0 my-2 p-3" >
                        <div className="col-10 px-0 d-flex flex-column justify-content-center align-items-start">
                            <p className="mb-0 font-weight-bold h4">Nombre producto</p>
                            <p className="mb-3">Descripción producto</p>
                            <p className="mb-0 h5">100€</p>
                        </div>
                        <div className="col-2 px-0 d-flex align-items-center justify-content-center">
                            <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-trash-fill ml-1 cursor-pointer" fill="#df4759"
                                xmlns="http://www.w3.org/2000/svg" >
                                <path fill-rule="evenodd"
                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="modal-footer bg-dark px-5 py-3">
                    <button type="button" className="btn btn-success btn-block py-2">Continuar</button>
                </div>
            </Modal>
        </React.Fragment >
    );
};