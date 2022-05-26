import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/_navheader.scss';
import '../styles/_navbar.scss';
function Navbar() {
  return (
    <div>
      <div className="navbar__header">
        <h3 className="navbar__phoneNum">Call us - 0329252477</h3>
        <div className="navbar__buttons">
            <button className="buttons">Register</button>
            <button className="buttons">Login</button>
        </div>
      </div>
      <div className="navbar__list">
        <a href="/" className="navbar__logo"><img src="/assets/images/logo.png" alt="" /></a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
