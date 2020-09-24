import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Bootstrap imports */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Children components */
import { Header } from "./app/components/header/Header";
import { Footer } from "./app/components/Footer";
import { ProductListPage } from "./app/pages/ProductListPage";
import { ProductDetailPage } from "./app/pages/ProductDetailPage";
import { FavouritesPage } from "./app/pages/FavouritesPage";
import { PurchasesPage } from "./app/pages/PurchasesPage";
import { ProfilePage } from './app/pages/ProfilePage';
import { Payment } from "./app/components/payment/Payment";
import { AnonymousPage } from "./app/pages/AnonymousPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="col-12 p-3 p-md-4 p-xl-5">
          <Switch>
            <Route path="/products"><ProductListPage /></Route>
            <Route path="/favourites"><FavouritesPage /></Route>
            <Route path="/purchases"><PurchasesPage /></Route>
            <Route path="/profile"><ProfilePage /></Route>
            <Route path="/payment"><Payment /></Route>
            <Route path="/other"><AnonymousPage /></Route>
            <Route path="/product/:id" children={<ProductDetailPage />}></Route>
            <Route exact path="/"><ProductListPage /></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
