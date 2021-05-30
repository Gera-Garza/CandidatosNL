import React from 'react'
import Logo from '../img/logo.png';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
        <a className="navbar-brand" href="#"><img src={Logo} height={30}/></a>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Candidatos">
              Candidatos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/Nosotros">
              Acerca de
            </a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;