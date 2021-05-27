import React from 'react'
import './PartidoDropdown.css'

const PartidoDropdown = () => {
    return (
        <div class="partidoDropdown">
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Partido político
  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">PAN</a>
                <a className="dropdown-item" href="#">PRI</a>
                <a className="dropdown-item" href="#">PRD</a>
                <a className="dropdown-item" href="#">PRD</a>
                <a className="dropdown-item" href="#">PT</a>
                <a className="dropdown-item" href="#">Partido Verde</a>
                <a className="dropdown-item" href="#">Movimiento Ciudadano</a>
                <a className="dropdown-item" href="#">Morena</a>
                <a className="dropdown-item" href="#">PES</a>
                <a className="dropdown-item" href="#">Fuerza por México</a>
                <a className="dropdown-item" href="#">RSP</a>
            </div>
        </div>
        </div>
    )
}

export default PartidoDropdown
