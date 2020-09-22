import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export const Product = ({productData}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 p-2">
            <Card className="product-card m-0 p-0">
                <Card.Img variant="top" className="p-3" src={productData.productImage} alt={productData.productName} />
                <Card.Body className="p-3 text-center">
                    <h5 className="mb-0">{productData.productName}</h5>
                    <p className="card-text mb-0">{productData.productResume}</p>
                    <p className="mb-0 font-weight-bold h4">{productData.productPrice}€</p>
                </Card.Body>
            </Card>
        </div>
    );
};