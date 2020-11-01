import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
// import ListTodo from './components/ListTodo'
// import Lists from './components/Lists'
import List from './components/Lists';
import Clock from "./components/Clock";
import ToggleButton from "./components/ToggleButton";

function App() {
  const a = [
    {
      name: "buy",
      id: 1,
      checked: false
    },
    {
      name: "say hi",
      id: 2,
      checked: true
    },
    {
      name: "read a book",
      id: 3,
      checked: true
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleButton/>
        <Clock/>
        <HelloWorld name="simon"/>
        {/* <ListTodo name="learn" id="learn"/> */}
        <List arr={a}/>
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
