import React from 'react';
import './App.css';
import CounterInput from './Components/CounterInput';
import CounterOutput from './Components/CounterOutput';

function App() {
  return (
    <div className="App">
    <CounterOutput />
    <br />
     <CounterInput />
    </div>
  );
}

export default App;
