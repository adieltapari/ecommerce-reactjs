import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Category from './views/Category';
import ItemDetalContainer from './components/Item/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
      <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route exact path="/category/:categoryId" element={<Category />}></Route>
            <Route exact path="/item/:id" element={<ItemDetalContainer />}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
