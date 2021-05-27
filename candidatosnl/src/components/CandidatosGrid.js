import React, { useState, useEffect } from 'react'
import db from '../services/firebase';
import CandidatoCard from './CandidatoCard'
import CandidatoPerfil from './CandidatoPerfil'
import CandidaturaDropdown from './CandidaturaDropdown'
import PartidoDropdown from './PartidoDropdown'

const CandidatosGrid = () => {
    const [cards, setCards] = useState([])
    const fetchCards = async () => {
        const response = db.collection('candidatosnl');
        const data = await response.get();
        let candidates = []
        data.docs.forEach(item => {
            console.log(item)
            candidates = [...candidates, ...Object.values(item.data())]
            // console.log(candidates)
        })
        setCards(candidates)
    }
    useEffect(() => {
        fetchCards();
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row justify-content-end" style={{marginBottom:"30px"}}>
                    <PartidoDropdown />
                    <CandidaturaDropdown />
                </div>
                <div className="row">
                {
                    cards && cards.map (card => {
                        // console.log(card)
                        return (
                        <CandidatoCard key={card.nombre} nombre={card.nombre} body={card.descripcion} imagen={card.imagen}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default CandidatosGrid
