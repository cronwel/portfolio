import React, { Component } from 'react';
import './App.css';
import Bio from './Components/section_bio/Bio';
import Tools from './Components/section_tools/Tools';
import Projects from './Components/section_project/Projects';
import Blog from "./Components/section_blog/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container_grid">
          <Bio/>
          <Projects/>
          <Tools/>
          <Blog/>
        </main>
      </div>

    );
  }
}

export default App;
