import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from "./app/components/Header";
import { Footer } from "./app/components/Footer";
import { ProductListPage } from "./app/pages/ProductListPage";
import { ProductDetailPage } from "./app/pages/ProductDetailPage";
import { PurchasesPage } from "./app/pages/PurchasesPage";
import { AnonymousPage } from "./app/pages/AnonymousPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="col-12 p-3 p-md-4 p-xl-5">
          <Switch>
            <Route path="/products"><ProductListPage /></Route>
            <Route path="/purchases"><PurchasesPage /></Route>
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
