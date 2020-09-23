import React from 'react';
import { Link } from "react-router-dom";

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <footer className="container-fluid bg-dark pt-4 pb-3">
            <div className="container">
                <div className="row m-0 text-center">
                    <Link to="/products" className="text-white mb-4 mx-auto h4 text-decoration-none">Tienda
                            <span className="ml-1 pb-1 px-1 bg-info text-dark">React</span>
                    </Link>
                </div>
                <div className="row m-0 text-light d-flex justify-content-between">
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-left text-md-center footer__links"><Link to="/other" className="text-decoration-none text-white">Quienes somos</Link></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-right text-md-center footer__links"><Link to="/other" className="text-decoration-none text-white">Como comprar</Link></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-left text-md-center footer__links"><Link to="/other" className="text-decoration-none text-white">Aviso de privacidad</Link></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-right text-md-center footer__links"><Link to="/other" className="text-decoration-none text-white">Política de cookies</Link></p>
                    <p className="col-12 mt-2 text-center">2020, Tienda Angular. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};