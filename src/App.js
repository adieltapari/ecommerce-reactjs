import React from 'react';
import './App.css';
import ItemCount from './components/Item/ItemCount/ItemCount';
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';


// Components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <div className='ContainerSection'>
              <ItemListContainer />
        </div>
      </div>
  );
}

export default App;