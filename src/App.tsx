import React from 'react';
import logo from './logo.svg';
import './App.css';
import { displayNotification } from './notification';
function App() {
  let temperature = 0.5
  return (
    <div className="App">
      <header className="App-header">
        <h1>{temperature} °C</h1>
      </header>
      <button onClick={displayNotification}>Click</button>
    </div>
  );
}

export default App;
