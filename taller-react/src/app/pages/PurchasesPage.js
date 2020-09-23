import React from 'react';

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { Sidebar } from '../components/Sidebar';
import { PurchaseHistory } from '../components/PurchaseHistory';

export const PurchasesPage = () => {
    return (
        <div className="row m-0 flex-xl-row-reverse">
            <div className="col-12 col-xl-3 px-0 pl-xl-4">
                <Sidebar />
            </div>
            <div className="col-12 col-xl-9 px-0 pr-xl-4">
                <PurchaseHistory />
            </div>
        </div>
    );
};