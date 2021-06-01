import React from 'react'
import './TiposCandidaturas.css'

const TiposCandidaturas = (props) => {
    return (
        <div class="tipos-candidatos">
            <div class="grey">
                <h2>El gobernador tiene dos funciones</h2>
                <p>Promulgar, ejecutar y hacer que se cumplan las leyes, decretos y demás disposiciones, así como iniciar ante el Congreso leyes y decretos en beneficio del pueblo.</p>
            </div>
            <div class="white">
                <h2>Diputado</h2>
                <p>Es el encargado de elaborar leyes o llevar a cabo modificaciones a éstas para adecuarlas a las necesidades actuales de la población. Es un regulador de la estructura y del funcionamiento del Estado.</p>
            </div>
            <div class="grey">
                <h2>Presidente Municipal</h2>
                <p>Responsable directo de la Administración Pública Municipal y encargado de velar por la correcta ejecución de los Programas de Obras y Servicios y demás programas municipales</p>
            </div>
        </div>
    )
}

export default TiposCandidaturas