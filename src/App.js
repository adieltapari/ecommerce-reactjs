import React, { Fragment } from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";

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
