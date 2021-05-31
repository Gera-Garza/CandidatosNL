import React, { useState } from 'react'
import CandidatoPerfil from './CandidatoPerfil'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './CandidatoCard.css';
const CandidatoCard = (props) => {
    return (
        <div className="candidatoCard">
            <div className="col-sm" style={{ marginBottom: "30px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.imagen} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.body}</p>
                        <a className="btn btn-primary">
                            <Link to={{
                            pathname: '/CandidatoPerfil/'+ props.url
                        }}>
                        Ver candidato</Link></a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CandidatoCard
