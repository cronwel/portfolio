import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Bio from './Bio';
import Blog from "./Blog";
import Tools from './Tools';
import Projects from './Projects';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Nav/>
        <Bio/>
        <Blog/>
        <Tools/>
        <Projects/>
        </header>
      </div>
    );
  }
}

export default App;
