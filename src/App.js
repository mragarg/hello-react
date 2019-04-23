
import React from 'react';
import logo from './logo.svg'; // Import an image. (React will do optimizations.)
import './App.css';

import Greet from './Greet';


// "App" is a component.
// A component is a function that returns a React Element
// A react Element is a description of a DOM element (or tree).
// The most common way to specify a React Element is by using JSX. 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
        <Greet whom='Oakley'/>
        <Greet whom='Milla'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
