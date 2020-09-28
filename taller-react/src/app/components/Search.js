import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setFilteredProducts } from '../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

export const Search = () => {
    const [products, setProducts] = useState([]);
    let filteredProducts = [];
    const [brands, setBrands] = useState([]);
    const [prices, setPrices] = useState([[]]);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();


    const createPricesArray = () => {
        setPrices([[0, 200], [200, 400], [400, 750], [750, 1000], [1000]]);
    }

    const getBrands = async () => {
        const res = await fetch(`http://localhost:3004/brands`);
        res.json().then(res => {
            setBrands(res);
        });
    }

    const getProducts = async () => {
        const res = await fetch(`http://localhost:3004/products`);
        res.json().then(res => {
            dispatch(setFilteredProducts(res));
            setProducts(res);
        });
    }

    const filterByUser = (unfilteredProducts, userFilter) => {
        return unfilteredProducts.filter((product) => (product.productName.toUpperCase()).includes(userFilter.toUpperCase().trim()));
    }

    const filterByBrand = (unfilteredProducts, brandFilter) => {
        return unfilteredProducts.filter((product) => (product.productBrand).includes(brandFilter));
    }

    const filterByPrice = (unfilteredProducts, priceFilter) => {
        return unfilteredProducts.filter((product) => {
            if (prices[priceFilter].length > 1) {
                return product.productPrice >= prices[priceFilter][0] && product.productPrice < prices[priceFilter][1];
            } else {
                return product.productPrice >= prices[priceFilter][0];
            }
        });
    }

    const applyFilters = (filters) => {
        if (filters.userFilter) {
            filteredProducts = filterByUser(filteredProducts, filters.userFilter);
        }
        if (filters.brandFilter !== 'noBrandFilter') {
            filteredProducts = filterByBrand(filteredProducts, filters.brandFilter);
        }
        if (filters.priceFilter !== 'noPriceFilter') {
            filteredProducts = filterByPrice(filteredProducts, filters.priceFilter);
        }
    }

    useEffect(() => {
        getProducts();
        getBrands();
        createPricesArray();
    }, []);

    const searchSubmit = (formData) => {
        filteredProducts = products;
        applyFilters(formData);
        dispatch(setFilteredProducts(filteredProducts));
    }

    return (
        <form onSubmit={handleSubmit(searchSubmit)} className="row m-0 p-3 mb-5 bg-light">
            <div className="col-12 col-lg-5 col-xl-4 px-0 pr-lg-1">
                <input className="form-control text-center border-dark" type="search" placeholder="¿Qué estás buscando?"
                    aria-label="Search" name="userFilter" ref={register} />
            </div>
            <div className="col-6 col-md-4 col-lg-3 px-0 pr-2 py-3 pb-md-0 pt-lg-0 px-lg-1">
                <select className="pl-3 custom-select text-center border-dark" name="brandFilter" ref={register}>
                    <option value='noBrandFilter' defaultValue>¿De qué marca?</option>
                    {
                        brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)
                    }
                </select>
            </div>
            <div className="col-6 col-md-4 col-lg-3 px-0 pl-2 pr-md-2 py-3 pb-md-0 pt-lg-0 px-lg-1">
                <select className="pl-3 custom-select border-dark" name="priceFilter" ref={register}>
                    <option className="text-center" value='noPriceFilter' defaultValue>¿De qué precio?</option>
                    {prices.map((item, index) =>
                        <option key={index} value={index}>
                            De {item[0]} a {item[1]}€
                        </option>
                    )}
                </select>
            </div >
            <div className="col-6 col-md-4 col-lg-1 col-xl-2 px-0 pl-md-2 pt-md-3 pt-lg-0 pl-lg-1 mx-auto">
                <button type="subtmit" className="btn btn-outline-dark btn-block"><span className="font-weight-bold">Buscar</span></button>
            </div>
        </form>
    );
};