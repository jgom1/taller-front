import React, { useState, useEffect } from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const SidebarCarousel = ({ promotionalProducts }) => {
    return (
        <Carousel className="d-xl-none carousel pb-3">
            {promotionalProducts.map((product, index) =>
                <Carousel.Item key={index}>
                    <div className="row m-0 justify-content-center align-items-center" >
                        <img className="col-3 img-fluid"
                            src={product.productImage}
                            alt={product.productName} />
                        <div className="col-6 px-0">
                            <p className="text-center h4">{product.productName}</p>
                            <p className="text-center h6">{product.productResume}</p>
                            <p className="mb-0 d-flex justify-content-center align-items-center">
                                <span
                                    className="text-danger font-weight-bold mr-2 h3"><del>{product.productOldPrice}€</del></span>
                                <span
                                    className="text-success ml-2 font-weight-bold current-price h1">{product.productPrice}€</span>
                            </p>
                        </div>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

const SidebarColumn = ({ promotionalProducts }) => {
    return (
        <div className="d-none d-xl-block" >
            <h2 className="mb-0 py-3 bg-dark text-center text-white d-none d-xl-block">¡Ofertas!</h2>
            {promotionalProducts.map((product, index) =>
                <div key={index} className="row m-0 py-2 border-bottom border-dark promotion-product">
                    <div className="col-4 px-0">
                        <img className="img-fluid"
                            src={product.productImage}
                            alt={product.productName} />
                    </div>
                    <div className="col-8 px-0 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-0">{product.productName}</h5>
                        <h6 className="mb-0">{product.productResume}</h6>
                        <p className="mb-0">
                            <span className="text-danger font-weight-bold mr-2"><del>{product.productOldPrice}€</del></span>|
                    <span className="text-success ml-2 font-weight-bold current-price">{product.productPrice}€</span>
                        </p>
                    </div>
                </div>
            )}
        </div >
    );
}


export const Sidebar = () => {
    const [products, setProducts] = useState([]);

    async function fetchPromotionalProducts() {
        const res = await fetch("http://localhost:3004/products?productPromotion=true");
        res.json().then(res => {
            console.log(res);
            setProducts(res)
        });
    }

    useEffect(() => {
        fetchPromotionalProducts();
    }, 1);
    return (
        <aside>
            <SidebarCarousel promotionalProducts={products}></SidebarCarousel>
            <SidebarColumn promotionalProducts={products}></SidebarColumn>
        </aside>
    );
}; 