import React from 'react';
import './App.css';
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';


// Components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <div className='ContainerSection'>
              <ItemListContainer categoryId="MLA1574"/>
              <ItemListContainer categoryId="MLA1499"/>
        </div>
      </div>
  );
}

export default App;
