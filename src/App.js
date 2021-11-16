import React, { Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <p>
            Ecommerce Coder House.
          </p>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
