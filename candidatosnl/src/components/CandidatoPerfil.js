import React, { useState, useEffect } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useParams } from 'react-router-dom';
import db from '../services/firebase';
import './CandidatoPerfil.css';

const CandidatoPerfil = (props) => {
    const [showProposals, setShowProposals] = useState(true);
    const [candidato, setCandidato] = useState({imagen: null, nombre: null, propuestas: null, logrosHistorial: null, email: null, facebook: null, instagram: null})
    let { id } = useParams();
    const handleProposals = () => {
        setShowProposals(true)
        setShowAchievements(false)
        setShowNews(false)
    }
    const [showAchievements, setShowAchievements] = useState(false)
    const handleAchievements = () => {
        setShowAchievements(true)
        setShowProposals(false)
        setShowNews(false)
    }
    const [showNews, setShowNews] = useState(false)
    const handleNews = () => {
        setShowNews(true)
        setShowAchievements(false)
        setShowProposals(false)
    }
    const ProposalsDiv = () => <div className="tab-pane fade show active text-left" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        {ReactHtmlParser(candidato.propuestas)}
    </div>;
    const AchievementsDiv = () => <div className="tab-pane fade show active text-left" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        {ReactHtmlParser(candidato.logrosHistorial)}
    </div>;
    const NewsDiv = () => <div className="tab-pane fade show active text-left" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Noticias
    </div>

    const fetchCards = async () => {
        const response = db.collection('candidatosnl');
        const data = await response.get();
        let candidates = []
        
        data.docs.forEach(item => {
            if (item.data()[id] != undefined) {
                setCandidato(item.data()[id]);
            }
        })
    }

    useEffect(() => {
        fetchCards();
    }, [])
    
    return (
        <div className="container candidatoPerfilContainer">
            <div className="row">
                <div className="col-sm-3" className="social">
                    <img src={candidato.imagen} alt="" srcset="" style={{ width: "200px", height: "200px", objectFit: 'cover' }} />
                    <h3>{candidato.nombre}</h3>
                    <hr />
                    { candidato.email ? <p>{candidato.email}</p> : null }
                    { candidato.facebook ? <p><a href={'https://facebook.com/' + candidato.facebook} target="blank">Facebook</a></p> : null }
                    { candidato.instagram ? <p><a href={'https://instagram.com/' + candidato.instagram} target="blank">Instagram</a></p> : null }
                </div>
                <div className="col-sm">
                    <div>
                        <nav className="candidatoPerfilNav">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={handleProposals}>Propuestas</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={handleAchievements}>Historial y logros</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={handleNews}>Noticias</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            {showProposals ? <ProposalsDiv /> : null}
                            {showAchievements ? <AchievementsDiv /> : null}
                            {showNews ? <NewsDiv /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatoPerfil
