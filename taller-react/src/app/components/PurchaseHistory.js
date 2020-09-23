import React, { useState, useEffect } from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const PurchaseProduct = ({ product }) => {
    return (
        <React.Fragment>
            <div className="d-none d-sm-block col-sm-2 px-0">
                <img src={product.productImage} alt={product.productName} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-10 px-0 pl-3">
                <div className="row m-0">
                    <div className="col-8 px-0 d-flex flex-column justify-content-center">
                        <p className="h4">{product.productName}</p>
                        <p className="mb-0">{product.productResume}</p>
                    </div>
                    <div className="col-4 px-0 d-flex justify-content-end align-items-center">
                        <p className="mb-0 h3">{product.productPrice}€</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

const Purchase = ({ purchase }) => {
    return (
        <div className="col-12 col-md-6 px-2">
            <Card className="p-3 mb-3" >
                <div className="row m-0 align-items-center text-center cursor-pointer">
                    <div className="col-6 col-xl-3 px-0">
                        <p className="">
                            <span className="d-block text-muted small">Fecha de compra</span>
                            <span className="d-block font-weight-bold">{purchase.purchaseDate}</span>
                        </p>
                    </div>
                    <div className="col-6 col-xl-3 px-0">
                        <p className="">
                            <span className="d-block text-muted small">Artículos</span>
                            <span className="d-block font-weight-bold">{purchase.purchaseProducts.length}</span>
                        </p>
                    </div>
                    <div className="col-6 col-xl-3 px-0">
                        <p className="">
                            <span className="d-block text-muted small">Precio total</span>
                            <span className="d-block font-weight-bold">{purchase.purchasePayment}€</span>
                        </p>
                    </div>
                    <div className="col-6 col-xl-3 px-0">
                        <p className="h5"><span className="badge font-weight-bold p-2">{purchase.purchaseState}</span></p>
                    </div>
                </div>
                <div className="row m-0 align-items-center border-top border-dark py-2">
                    {purchase.purchaseProducts.map((item, index) => <PurchaseProduct key={index} product={item} />)}
                </div>
                <div className="row m-0 text-center border-top border-dark pt-2 justify-content-around">
                    <div className="col-4 px-0">
                        <p className="mb-0">
                            <span className="d-block text-muted small">Envío
                                {purchase.purchaseShipping.purchaseShippingName}</span>
                            <span
                                className="d-block font-weight-bold">{purchase.purchaseShipping.purchaseShippingPayment}€</span>
                        </p>
                    </div>
                    <div className="col-4 px-0">
                        <p className="mb-0">
                            <span className="d-block text-muted small">IVA(21%)</span>
                            <span
                                className="d-block font-weight-bold">{Math.round((purchase.purchasePayment * 0.21) * 100) / 100}€</span>
                        </p>
                    </div>
                </div>
            </Card>
        </div >
    );
};

export const PurchaseHistory = () => {

    const [purchases, setPurchases] = useState([]);

    async function fetchPurchases() {
        const res = await fetch(`http://localhost:3004/purchases?userId=1`);
        res.json().then(res => {
            setPurchases(res)
        });
    }

    useEffect(() => {
        fetchPurchases();
    }, []);

    return (
        <section className="col-12 py-3 px-1 bg-light">
            <div className="row m-0">
                {(purchases.length > 0)
                    ?
                    purchases.map((item, index) => <Purchase key={index} purchase={item} />)
                    :
                    <p className="mx-auto text-center h2 py-5 my-5">Aún no has realizado ninguna compra.</p>
                }
            </div>
        </section>
    );
}