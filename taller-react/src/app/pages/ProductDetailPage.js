import React, { useState, useEffect } from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { Sidebar } from '../components/Sidebar';
import { ProductDetail } from '../components/ProductDetail';

export const ProductDetailPage = () => {
    return (
        <div class="row m-0 flex-xl-row-reverse">
            <div class="col-12 col-xl-3 px-0 pl-xl-4">
                <Sidebar></Sidebar>
            </div>
            <div class="col-12 col-xl-9 px-0 pr-xl-4">
                <ProductDetail></ProductDetail>
            </div>
        </div>
    );
}


