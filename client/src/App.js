import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './Components/Nav';
import PBio from './Components/pages/PBio';
import PTools from './Components/pages/PTools';
import PProject1 from './Components/pages/PProject1';
import PBlog from "./Components/pages/PBlog";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route path='/bio' component={ PBio } />
        <Route path='/tools' component={ PTools } />
        <Route path='/project1' component={ PProject1 } />
        <Route path='/blog' component={ PBlog } />
      </BrowserRouter>
    );
  }
}

export default App;
