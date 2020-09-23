import React, {useState} from 'react';
import { Link } from "react-router-dom";

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';


const UnloggedNav = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    return (
        <React.Fragment>
            <div>
                <button type="button" className="btn btn-outline-light px-4 mr-2">Registrarse</button>
                <button type="button" className="btn btn-danger px-4 ml-2" onClick={handleShowLoginModal}>Entrar</button>
            </div>
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleCloseLoginModal}>Close</button>
                    <button className="btn btn-secondary" onClick={handleCloseLoginModal}>Save Changes</button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
};

const LoggedNav = () => {
    return (
        <div className="d-flex align-items-center text-white">
            <Dropdown className="mr-2">
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    ¡Hola Usuario!
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className="d-flex align-items-center" href="#/action-1">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill mr-1"
                            fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>Mi perfil
                        </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center" href="#/action-2">
                        <svg
                            width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-1"
                            fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>Mis favoritos
                        </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center" href="#/action-3">
                        <svg
                            width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-handbag-fill mr-1"
                            fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 0 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                        </svg>Mis compras
                        </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center" href="#/action-4">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-door-open-fill mr-1"
                            fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                        </svg>Salir
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex align-items-center cursor-pointer">
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart-fill ml-2 mb-0"
                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                <Badge className="align-self-start" variant="light">0</Badge>
            </div >
        </div >
    )
};

export const Header = () => {
    return (
        <header>
            <div className="container-fluid bg-dark px-5">
                <div className="row m-0 d-flex align-items-center py-3">
                    <div className="col-12 col-md-6 col-xl-9 px-0 text-center text-md-left text-xl-center">
                        <Link to="/products" className="text-white mb-0 h2 text-decoration-none">Tienda<span
                            className="ml-1 pb-1 px-1 bg-info text-dark">React</span>
                        </Link>
                    </div>
                    <nav className="col-12 col-md-6 col-xl-3 mt-4 mt-md-0 px-0">
                        <div className="row m-0 justify-content-center justify-content-md-end justify-content-xl-center align-items-center">
                            <UnloggedNav></UnloggedNav>
                            {/* <LoggedNav></LoggedNav> */}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};