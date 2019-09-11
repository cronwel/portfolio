import React from 'react';
import Bio from './section_bio/Bio';
import Tools from './section_tools/Tools';
import Projects from './section_project/Projects';
import Blog from "./section_blog/Blog";
class Nav extends React.Component {
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
  )
}}

export default Nav;