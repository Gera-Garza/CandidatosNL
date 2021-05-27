import React from 'react'
import './PartidoDropdown.css'

const PartidoDropdown = (props) => {
    return (
        <div class="partidoDropdown">
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Partido político
  </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={props.partido}>PAN</a>
                <a className="dropdown-item" onClick={props.partido}>PRI</a>
                <a className="dropdown-item" onClick={props.partido}>PRD</a>
                <a className="dropdown-item" onClick={props.partido}>PT</a>
                <a className="dropdown-item" onClick={props.partido}>Partido Verde</a>
                <a className="dropdown-item" onClick={props.partido}>Movimiento Ciudadano</a>
                <a className="dropdown-item" onClick={props.partido}>Morena</a>
                <a className="dropdown-item" onClick={props.partido}>PES</a>
                <a className="dropdown-item" onClick={props.partido}>Fuerza por México</a>
                <a className="dropdown-item" onClick={props.partido}>RSP</a>
            </div>
        </div>
        </div>
    )
}

export default PartidoDropdown
