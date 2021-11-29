import React from 'react';
import './App.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';


// Components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
             <ItemListContainer categoryId="MLA1499"/>
             <ItemDetailContainer />
      </div>
  );
}

export default App;
