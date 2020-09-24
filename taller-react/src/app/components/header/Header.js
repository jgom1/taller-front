import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectLogged } from '../../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { Registration } from './Registration';
import { Login } from './Login';
import { NavDropdown } from './NavDropdown';
import { ShoppingCart } from './ShoppingCart';


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
            <ShoppingCart />
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