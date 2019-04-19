import React from 'react';

class Nav extends React.Component {
render() {
    return (
        <nav className="nav_v1"> 
            <ul className="headers">
                <li><a href="www.google.com">Bio</a></li>
                <li>Projects</li>
                <li>Interests</li>
                <li>Blog</li>
            </ul>

        </nav>
    )
}}

export default Nav;