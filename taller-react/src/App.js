import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Header } from "./app/components/Header";
import { Footer } from "./app/components/Footer";
import { Sidebar } from "./app/components/Sidebar";
import { Product } from "./app/components/Product";
import { ProductListPage } from "./app/pages/ProductListPage";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Sidebar></Sidebar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <main class="col-12 p-3 p-md-4 p-xl-5">
        <ProductListPage></ProductListPage>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
