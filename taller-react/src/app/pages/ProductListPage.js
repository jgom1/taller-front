import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../features/counter/counterSlice';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';

/* Children components */
import { Sidebar } from '../components/Sidebar';
import { Search } from '../components/Search';
import { Product } from '../components/Product';

export const ProductListPage = () => {
    const products = useSelector(selectFilteredProducts);

    return (
        <div className="row m-0 flex-xl-row-reverse">
            <div className="col-12 col-xl-3 px-0 pl-xl-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-12 col-xl-9 px-0 pr-xl-4">
                <Search />
                {(products.length > 0)
                    ?
                    <CardDeck className="m-0 px-4 p-sm-2 bg-light">
                        {products.map((item, index) => <Product key={index} productData={item} />)}
                    </CardDeck>
                    :
                    <p className="mx-auto text-center h2 py-5 my-5">Parece que ningún producto coincide con lo que buscas...</p>
                }
            </div >
        </div>
    );
};