import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

const LinkBackToProducts = () => {
    return (
        <p className="h5 mb-4 mb-lg-0"><Link to="/products"
            className="text-dark d-flex align-items-center text-decoration-none">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            Volver al listado de productos</Link>
        </p>
    );
}

const ProductDescription = ({ product }) => {
    return (
        <div className="row m-0">
            <div className="col-12 col-lg-4 px-0 pr-lg-3 mb-3 mb-lg-0 d-flex align-items-center">
                <img className="img-fluid mx-auto" src={product.productImage} alt={product.productName} />
            </div>
            <div className="col-12 col-lg-8 px-0 pl-lg-3">
                <h2 className="text-center mb-3">{product.productName}</h2>
                <h4 className="text-center mb-3">{product.productResume}</h4>
                <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eaque ipsa facilis
                ad vitae totam facere officiis voluptatem aperiam tenetur. Animi neque ut doloribus tempore saepe nisi magni facilis culpa?</p>
                <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eaque ipsa facilis
                ad vitae totam facere officiis voluptatem aperiam tenetur. Animi neque ut doloribus tempore saepe nisi magni facilis culpa?</p>
                <p className="text-center mb-0 mt-4">Consíguelo ya por sólo:</p>
                <h3 className="h1 text-center">{product.productPrice}€</h3>
                {product.productQuantity < 1 &&
                    <p className="h4 text-center text-danger">¡Ops! Actualmente este producto no está disponible en nuestro stock...</p>
                }
            </div>
            <div className="col-12 px-0">
                <div className="row m-0 mt-4 justify-content-center justify-content-xl-end">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-md-0 px-0 pr-md-2">
                        <button type="button"
                            className="btn btn-outline-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-1" fill="#df4759"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            Añadir a favoritos
                        </button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-2 mb-md-0 px-0 pr-md-2" >
                        <button type="button"
                            className="btn btn-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center" >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-1" fill="#df4759"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            Quitar de favoritos
                        </button >
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-5 mb-2 mb-md-0 px-0 pl-md-2">
                        {product.productQuantity > 0 &&
                            <button type="button" className="btn btn-danger btn-block p-3 p-xl-2">Comprar</button>
                        }
                        {product.productQuantity < 1 &&
                            <button type="button" className="btn btn-dark btn-block p-3 p-xl-2 d-flex align-items-center justify-content-center"
                                data-toggle="modal" data-target="#noticeOutOfStockModal">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill mr-1"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                </svg>
                                Notifícame cuando esté disponible
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

// const OutOfStockModal = () => {
//     return (
//         <div className="modal fade" id="noticeOutOfStockModal" tabindex="-1" aria-labelledby="noticeOutOfStockModalLabel" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-body p-5 text-center">
//                         <h2 className="mt-5">¡Tomamos nota!</h2>
//                         <h5>Trabajamos para que puedas disfrutar de tus artículos favoritos cuanto antes.</h5>
//                         <p className="my-3">Recibirás un correo electrónico cuando este artículo esté disponible.</p>
//                         <button type="button" className="col-4 btn btn-dark mx-auto" data-dismiss="modal">Aceptar</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



export const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    async function fetchProduct() {
        const res = await fetch(`http://localhost:3004/products/${id}`);
        res.json().then(res => {
            setProduct(res)
        });
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <section className="col-12 px-0 bg-light p-3">
            <LinkBackToProducts></LinkBackToProducts>
            <ProductDescription product={product}></ProductDescription>
        </section>
    );
};