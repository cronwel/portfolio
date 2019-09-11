import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
class Projects extends React.Component {
  state={
    item: "Stuff"

  }
render() {
    return(
      <>
        <section className="section_projects">
          <header >
              <Link to="project1">
              [ Projects ]
              </Link>
          </header>
          <p>GymCal</p>
          <p>SimDHR</p>
        </section>
      </>
    )
  }
}

export default Projects;