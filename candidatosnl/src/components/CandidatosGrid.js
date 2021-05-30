import React, { useState, useEffect, useCallback } from 'react'
import db from '../services/firebase';
import CandidatoCard from './CandidatoCard'
import CandidaturaDropdown from './CandidaturaDropdown'
import PartidoDropdown from './PartidoDropdown'

const CandidatosGrid = () => {
    const [filterCandidate, setFilterCandidate] = useState("")
    const [filterResults, setFilterResults] = useState([])
    const handleClick = event => {
        console.log(event.target.innerText)
        setFilterCandidate(event.target.innerText)
    }
    const [cards, setCards] = useState([])
    const fetchCards = async () => {
        const response = db.collection('candidatosnl');
        const data = await response.get();
        let candidates = []
        data.docs.forEach(item => {
            candidates = [...candidates, ...Object.values(item.data())]
        })
        setCards(candidates)
    }
    useEffect(() => {
        fetchCards();
    })

    useEffect(() => {
        const results = cards && cards.filter( card => 
            card.partido === filterCandidate || card.candidatura == filterCandidate
            )

            setFilterResults(results)
    }, [cards])
    

    return (
        <div>
            <div className="container">
                <div className="row justify-content-end" style={{marginBottom:"30px"}}>
                    <PartidoDropdown partido={handleClick}/>
                    <CandidaturaDropdown candidatura={handleClick}/>
                </div>
                <div className="row">
                {
                    filterResults.map(item => {
                        return(
                            <div>
                                <CandidatoCard key={item.nombre} nombre={item.nombre} body={item.descripcion} imagen={item.imagen} logros={item.logrosHistorial} propuestas={item.propuestas}/>
                            </div>
                        )
                    })
                    // cards && cards.map (card => {
                    //     console.log(card)
                    //     return (
                    //     <CandidatoCard key={card.nombre} nombre={card.nombre} body={card.descripcion} imagen={card.imagen}/>
                    //     )
                    // })
                }
                </div>
            </div>
        </div>
    )
}

export default CandidatosGrid