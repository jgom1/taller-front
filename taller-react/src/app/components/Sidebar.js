import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const SidebarCarousel = () => {
    return (
        <Carousel className="d-xl-none carousel pb-3">
            <Carousel.Item>
                <div className="row m-0 justify-content-center align-items-center" >
                    <img className="col-3 img-fluid"
                        src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MARKET/019/019/922/0190199227057_00_640x640.jpg"
                        alt="Nombre del producto" />
                    <div class="col-6 px-0">
                        <p className="text-center h4">Nombre del producto</p>
                        <p className="text-center h6">Descripción del producto</p>
                        <p className="mb-0 d-flex justify-content-center align-items-center">
                            <span
                                className="text-danger font-weight-bold mr-2 h3"><del>120€</del></span>
                            <span
                                className="text-success ml-2 font-weight-bold current-price h1">100€</span>
                        </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row m-0 justify-content-center align-items-center" >
                    <img className="col-3 img-fluid"
                        src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MARKET/019/019/922/0190199227057_00_640x640.jpg"
                        alt="Nombre del producto" />
                    <div class="col-6 px-0">
                        <p className="text-center h4">Nombre del producto</p>
                        <p className="text-center h6">Descripción del producto</p>
                        <p className="mb-0 d-flex justify-content-center align-items-center">
                            <span
                                className="text-danger font-weight-bold mr-2 h3"><del>120€</del></span>
                            <span
                                className="text-success ml-2 font-weight-bold current-price h1">100€</span>
                        </p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

const SidebarXL = () => {
    return (
        <div className="d-none d-xl-block" >
            <h2 className="mb-0 py-3 bg-dark text-center text-white d-none d-xl-block">¡Ofertas!</h2>
            <div className="row m-0 py-2 border-bottom border-dark promotion-product">
                <div className="col-4 px-0">
                    <img className="img-fluid"
                        src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MARKET/019/019/922/0190199227057_00_640x640.jpg"
                        alt="Nombre del producto" />
                </div>
                <div className="col-8 px-0 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="mb-0">Nombre del producto</h5>
                    <h6 className="mb-0">Descripción del producto</h6>
                    <p className="mb-0">
                        <span className="text-danger font-weight-bold mr-2"><del>120€</del></span>|
                    <span className="text-success ml-2 font-weight-bold current-price">100€</span>
                    </p>
                </div>
            </div>
            <div className="row m-0 py-2 border-bottom border-dark promotion-product">
                <div className="col-4 px-0">
                    <img className="img-fluid"
                        src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MARKET/019/019/922/0190199227057_00_640x640.jpg"
                        alt="Nombre del producto" />
                </div>
                <div className="col-8 px-0 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="mb-0">Nombre del producto</h5>
                    <h6 className="mb-0">Descripción del producto</h6>
                    <p className="mb-0">
                        <span className="text-danger font-weight-bold mr-2"><del>120€</del></span>|
                    <span className="text-success ml-2 font-weight-bold current-price">100€</span>
                    </p>
                </div>
            </div>
        </div >
    );
}


export const Sidebar = () => {
    return (
        <aside>
            <SidebarCarousel></SidebarCarousel>
            <SidebarXL></SidebarXL>
        </aside>
    );
}; 