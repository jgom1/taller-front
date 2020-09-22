import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <footer className="container-fluid bg-dark pt-4 pb-3">
            <div className="container">
                <div className="row m-0 text-center">
                    <a className="text-white mb-4 mx-auto h4 text-decoration-none">Tienda
                    <span className="ml-1 pb-1 px-1 bg-info text-dark">React</span>
                    </a>
                </div>
                <div className="row m-0 text-light d-flex justify-content-between">
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-left text-md-center footer__links"><a className="text-decoration-none text-white" href="#">Quienes somos</a></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-right text-md-center footer__links"><a className="text-decoration-none text-white" href="#">Como comprar</a></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-left text-md-center footer__links"><a className="text-decoration-none text-white" href="#">Aviso de privacidad</a></p>
                    <p className="col-12 col-sm-6 col-md-3 text-center text-sm-right text-md-center footer__links"><a className="text-decoration-none text-white" href="#">Política de cookies</a></p>
                    <p className="col-12 mt-2 text-center">2020, Tienda Angular. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};