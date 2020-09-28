import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser, setCart, setFavourites, setFavouritesId, logout } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { BsFillPersonFill, BsHeartFill, BsFillBucketFill } from "react-icons/bs";
import { FaDoorOpen } from "react-icons/fa"; 


export const NavDropdown = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showConfirmExitModal, setShowConfirmExitModal] = useState(false);

    const handleCloseConfirmExitModal = () => setShowConfirmExitModal(false);
    const handleShowConfirmExitModal = () => setShowConfirmExitModal(true);
    const handleLogout = () => {
        dispatch(logout());
        dispatch(setCart([]));
        dispatch(setFavourites([]));
        dispatch(setFavouritesId(0));
        dispatch(setUser({}));
        handleCloseConfirmExitModal();
        history.push('/products');
    };

    return (
        <React.Fragment>
            <Dropdown className="mr-2">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    ¡Hola {user.userName}!
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/profile')}>
                        <BsFillPersonFill className="mr-1 text-dark" />Mi perfil
                </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/favourites')}>
                        <BsHeartFill className="mr-1 text-dark" />Mis favoritos
                </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/purchases')}>
                        <BsFillBucketFill className="mr-1 text-dark" />Mis compras
                </Dropdown.Item>
                    <Dropdown.Item className="text-dark d-flex align-items-center" onClick={handleShowConfirmExitModal}>
                        <FaDoorOpen className="mr-1 text-dark" />Salir
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Modal show={showConfirmExitModal} onHide={handleCloseConfirmExitModal}>
                <Modal.Body className="p-5 text-center">
                    <div className="modal-body text-center h4 mb-4">¿Seguro que deseas salir?</div>
                    <div className="row m-0 justify-content-center">
                        <button type="button" className="col-3 btn btn-success mr-2" onClick={handleCloseConfirmExitModal}>No</button>
                        <button type="button" className="col-3 btn btn-danger ml-2" onClick={handleLogout}>Sí</button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment >
    );
};