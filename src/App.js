import React from 'react';
import './App.css';


// Components
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <div className='ContainerSection'>
              <ItemListContainer
                name='Brushed DC Motor Drivers'
                description='Single and dual motor driver carriers get your brushed'
                img='https://a.pololu-files.com/picture/0J5250.600x400.jpg?8243159a88f13b4a1b62b37b4868d19a'
              />
              <ItemListContainer
                name='Tic Stepper Motor Controllers'
                description='The Tic offers simple control of bipolar stepper motors.'
                img='https://a.pololu-files.com/picture/0J9741.600x400.jpg?315ba01baeed019ebf3565c040157335'
              />
              <ItemListContainer
                name='Tic Stepper Motor Controllers'
                description='The Tic offers simple control of bipolar stepper motors.'
                img='https://a.pololu-files.com/picture/0J9741.600x400.jpg?315ba01baeed019ebf3565c040157335'
              />
        </div>
      </div>
  );
}

export default App;
