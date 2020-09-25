import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const Search = () => {

    return (
        <div class="row m-0 p-3 mb-5 bg-light">
            <div class="col-12 col-lg-5 col-xl-4 px-0 pr-lg-1">
                <input class="form-control text-center border-dark" type="search" placeholder="¿Qué estás buscando?"
                    aria-label="Search" />
            </div>
            <div class="col-6 col-md-4 col-lg-3 px-0 pr-2 py-3 pb-md-0 pt-lg-0 px-lg-1">
                <select class="pl-3 custom-select text-center border-dark" >
                    <option value='noBrandFilter' selected>¿De qué marca?</option>
                    <option >Marca</option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-3 px-0 pl-2 pr-md-2 py-3 pb-md-0 pt-lg-0 px-lg-1">
                <select class="pl-3 custom-select border-dark">
                    <option class="text-center" value='noPriceFilter' selected>¿De qué precio?</option>
                    <option>
                        <span>De 100 a 150€</span>
                        <span>Más de 500€</span>
                    </option>
                </select>
            </div>
            <div class="col-6 col-md-4 col-lg-1 col-xl-2 px-0 pl-md-2 pt-md-3 pt-lg-0 pl-lg-1 mx-auto">
                <button type="button" class="btn btn-outline-dark btn-block"><span class="font-weight-bold">Buscar</span></button>
            </div>
        </div>
    );
};