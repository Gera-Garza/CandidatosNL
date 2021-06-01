import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
        <Link className="navbar-brand" to="/"><img src={Logo} height={30}/></Link>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Candidatos">
              Candidatos
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/tipos-candidaturas">
              Tipos de candidaturas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Nosotros">
              Acerca de nosotros
            </Link>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;