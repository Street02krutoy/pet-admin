import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <div className='grid grid-cols-4'>
      <div className="col-start-1 h-screen" style={{backgroundColor: "white"}}>01</div>
  <div className="col-start-2 col-end-4">02</div>
      </div>
    </div>
    
  );
}

export default App;
