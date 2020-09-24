import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser, logout } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const NavDropdown = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutEvent = () => {
        dispatch(logout());
        dispatch(setUser({}));
        history.push('/products');
    };

    return (
        <Dropdown className="mr-2">
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                ¡Hola {user.userName}!
                    </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/other')}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill mr-1"
                        fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>Mi perfil
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/favourites')}>
                    <svg
                        width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-1"
                        fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>Mis favoritos
                </Dropdown.Item>
                <Dropdown.Item className="d-flex align-items-center" onClick={() => history.push('/purchases')}>
                    <svg
                        width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-handbag-fill mr-1"
                        fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 0 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                    </svg>Mis compras
                </Dropdown.Item>
                <Dropdown.Item className="text-dark d-flex align-items-center" onClick={logoutEvent}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-door-open-fill mr-1"
                        fill="#343A40" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                    </svg>Salir
                        </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};