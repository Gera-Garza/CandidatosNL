import React, { useState } from 'react'
import './CandidatoPerfil.css'
const CandidatoPerfil = (props) => {
    const [showProposals, setShowProposals] = useState(true)
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
        {props.location.candidatoProps.proposals}
    </div>;
    const AchievementsDiv = () => <div className="tab-pane fade show active text-left" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        {props.location.candidatoProps.achievements}
    </div>;
    const NewsDiv = () => <div className="tab-pane fade show active text-left" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Noticias
    </div>
    return (
        <div className="container candidatoPerfilContainer">
            <div className="row">
                <div className="col-sm-3">
                    <img src={props.location.candidatoProps.image} alt="" srcset="" style={{ width: "200px", height: "200px" }} />
                    <h3>{props.location.candidatoProps.name}</h3>
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
                            {showProposals ? <ProposalsDiv/> : null}
                            {showAchievements ? <AchievementsDiv/> : null}
                            {showNews ? <NewsDiv/> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidatoPerfil
