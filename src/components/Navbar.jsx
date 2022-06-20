import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../styles/_navheader.scss';
import '../styles/_navbar.scss';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
function Navbar() {
  const [search, setsearch] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar__header">
        <h3 className="navbar__phoneNum">Call us - 0329252477</h3>
        <div className="navbar__buttons">
          <div className="buttons"><Link to="/register" >Register</Link></div>
          <div className="buttons"><Link to="/login" >Login</Link></div>  
            
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
          <li >
            <i onClick={()=>setsearch(!search)} class="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
      <div className={search? "navbar__search__page active__search":"navbar__search__page"}>
        <h1 className="close" onClick={()=>setsearch(!search)}></h1>
        <TextField fullWidth id="standard-basic" label="Search" variant="standard" color="secondary" />
      </div>
    </div>
  )
}

export default Navbar
