import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export const Product = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 p-2">
            <Card className="product-card m-0 p-0">
                <Card.Img variant="top" src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MARKET/019/019/922/0190199227057_00_640x640.jpg" alt="Alt del producto" />
                <Card.Body className="p-3 text-center">
                    <h5 className="mb-0">Nombre product</h5>
                    <p className="card-text mb-0">Resumen del producto</p>
                    <p className="mb-0 font-weight-bold h4">100€</p>
                </Card.Body>
            </Card>
        </div>
    );
};