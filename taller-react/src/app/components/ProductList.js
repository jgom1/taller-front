import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductList = () => {
    return (
        <React.Fragment>
            <div className="row m-0 flex-xl-row-reverse">
                <div className="col-12 col-xl-3 px-0 pl-xl-4">
                    <p>SIDEBAR</p>
                </div>
                <div className="col-12 col-xl-9 px-0 pr-xl-4">
                    <p>BUSCADOR</p>
                    <p className="mx-auto text-center h2 py-5 my-5">Parece que ningún producto coincide con
                    lo que buscas...</p>
                    <section className="card-deck m-0 px-4 p-sm-2 bg-light">
                        <div className="col-12 col-sm-6 col-md-4 col-xl-3 p-2">PRODUCTO</div>
                    </section >
                </div >
            </div >
        </React.Fragment >
    );
};