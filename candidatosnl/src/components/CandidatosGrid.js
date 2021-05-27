import React from 'react'
import CandidatoPerfil from './CandidatoPerfil'
import CandidaturaDropdown from './CandidaturaDropdown'
import PartidoDropdown from './PartidoDropdown'

const CandidatosGrid = () => {
    return (
        <div>
            <div className="container">
            <div className="row justify-content-end">
            <PartidoDropdown/>
            <CandidaturaDropdown/>
            </div>
            {/* <CandidatoPerfil/> */}
            </div>
        </div>
    )
}

export default CandidatosGrid
