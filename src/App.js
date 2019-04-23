
import React from 'react';
import logo from './logo.svg'; // Import an image. (React will do optimizations.)
import './App.css';

import Greet from './Greet';
import Counter from './Counter';
import ClickyCounter from './ClickyCounter';


// "App" is a component.
// A component is a function that returns a React Element
// A react Element is a description of a DOM element (or tree).
// The most common way to specify a React Element is by using JSX. 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClickyCounter startAt={999999999}/>
        <Counter />
        <ClickyCounter />
        <Counter />
        <ClickyCounter />

        <Counter />
        <Counter />
        <Greet />
        {/* This is a comment in JSX */}
        <Greet whom='Ashish'/>
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
