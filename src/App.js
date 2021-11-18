import React from 'react';
import './App.css';


// Components
import CartWidget from './components/CartWidget/CartWidget';
import Header from './components/Header/Header';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className='CartSection'>
              <CartWidget
                name='Brushed DC Motor Drivers'
                description='Single and dual motor driver carriers get your brushed'
                img='https://a.pololu-files.com/picture/0J5250.600x400.jpg?8243159a88f13b4a1b62b37b4868d19a'
              />
              <CartWidget
                name='Tic Stepper Motor Controllers'
                description='The Tic offers simple control of bipolar stepper motors.'
                img='https://a.pololu-files.com/picture/0J9741.600x400.jpg?315ba01baeed019ebf3565c040157335'
              />
        </div>
      </div>
  );
}

export default App;
