import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer'

// Views
import Home from './views/Home/Home';
import Category from './views/Category';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/category/:categoryId" element={<Category />}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
