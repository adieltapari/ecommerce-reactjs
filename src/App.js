import React from 'react';
import './App.css';
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer';


// Components
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <div className='ContainerSection'>
             <ItemDetailContainer />
        </div>
      </div>
  );
}

export default App;
