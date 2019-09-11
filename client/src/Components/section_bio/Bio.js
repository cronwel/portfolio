import React from "react";
import './bio.css';
import { Link } from 'react-router-dom';
class Bio extends React.Component {
  

render() {
    return (
        <section className="section_bio">
        <header>
          <Link to="/bio">
          [ Bio ]
          </Link>
        </header>
				<p> Noel Irias</p>
				<p>Fullstack</p>
        <p>Developer</p>
        <p>Web developer with a track record of awesome</p>
        </section>
    )
	}
}

export default Bio;