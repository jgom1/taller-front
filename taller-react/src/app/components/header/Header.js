import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectLogged, selectUser } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

/* Children components */
import { Registration } from './Registration';
import { Login } from './Login';
import { NavDropdown } from './NavDropdown';


const UnloggedNav = () => {
    return (
        <div>
            <Registration />
            <Login />
        </div>
    )
};

const LoggedNav = () => {
    
    return (
        <div className="d-flex align-items-center text-white">
           <NavDropdown /> 
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
    const logged = useSelector(selectLogged);
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
                            {(logged) ? <LoggedNav /> : <UnloggedNav />}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};