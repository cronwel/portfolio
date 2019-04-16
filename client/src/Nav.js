import React from 'react';
import './App.css';

class Nav extends React.Component {
render() {
    return (
        <nav className="nav_v1"> 
            <ul>
                <li>Bio</li>
                <li>Projects</li>
                <li>Interests</li>
                <li>Blog</li>
            </ul>

        </nav>
    )
}}

export default Nav;