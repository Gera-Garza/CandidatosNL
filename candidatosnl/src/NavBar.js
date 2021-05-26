import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

   
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Diputados
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/Diputados">PRI</a>
              <a class="dropdown-item" href="/Diputados">PAN</a>
            </div>
          </li>
      
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              Ayuntamientos
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/Ayuntamiento">PRI</a>
              <a class="dropdown-item" href="/Ayuntamiento">PAN</a>
            </div>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;