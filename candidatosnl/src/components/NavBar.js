import React from 'react'


function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
        <a className="navbar-brand" href="#">CandidatosNL</a>
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Candidatos" id="navbardrop" data-toggle="dropdown">
              Candidatos
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/Nosotros" id="navbardrop" data-toggle="dropdown">
              Acerca de
            </a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;