import React from 'react'
import './CandidaturaDropdown.css'

const CandidaturaDropdown = () => {
    return (
        <div class="candidaturaDropdown">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Candidatura
  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Gobernador</a>
                    <a className="dropdown-item" href="#">Presidente municipal</a>
                    <a className="dropdown-item" href="#">Diputado</a>
                    <a className="dropdown-item" href="#">Senador</a>
                </div>
            </div>
        </div>
    )
}

export default CandidaturaDropdown
