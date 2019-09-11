import React from 'react';
import "./tools.css";
import { Link } from 'react-router-dom';

class Tools extends React.Component {
render() {
    return(
      <section className="section_tools">
        <header>
          <Link to="/tools" >
            [ Tools ]
          </Link>
        </header>
        <p>
          maybe something
        </p>
      </section>
    )
  }
}

export default Tools;