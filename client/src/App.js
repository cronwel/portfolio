import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Bio from './Components/q1_bio/Bio';
import Blog from "./Components/q3_blog/Blog";
import Tools from './Components/q4_tools/Tools';
import Projects from './Components/q2_projects/Projects';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header section">
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
