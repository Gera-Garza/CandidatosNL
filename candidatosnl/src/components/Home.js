import React, { useState, useEffect } from 'react'
import db from '../services/firebase';
import CandidatoCard from './CandidatoCard';
import './Home.css'
import NewsGrid from './NewsGrid';
import SearchBar from './SearchBar';
function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }
    const [candidateCards, setCards] = useState([])
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
        // console.log(cards)

        const results = candidateCards && candidateCards.filter(card =>
            card.nombre === searchTerm
        );
        setSearchResults(results);
        // console.log(searchResults)
    }, [searchTerm])

    return (
        <div>
            <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
            <div class="container" style={{ paddingBottom: "10px" }}>
                {
                    searchResults.map(item => {
                        return (
                            <div>

                                <h1>Candidato(s) encontrado</h1>
                                <CandidatoCard nombre={item.nombre} body={item.descripcion} imagen={item.imagen} />
                            </div>
                        )
                    })

                }
                <h1 className="text-left">Últimas noticias</h1>
                <NewsGrid />
            </div>
        </div>
    )
}
export default Home;