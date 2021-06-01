import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import db from '../services/firebase';
import CandidatoCard from './CandidatoCard';
import './CandidatosGrid.css';
import CandidaturaDropdown from './CandidaturaDropdown'
import PartidoDropdown from './PartidoDropdown'

const CandidatosGrid = () => {
    const [filterCandidate, setFilterCandidate] = useState("Gobernador")
    const [filterResults, setFilterResults] = useState([])
    const [filteredData, setFilteredData] = useState()
    const [selectedPartido, setSelectedPartido] = useState('Todos');
    const [selectedCandidatura, setSelectedCandidatura] = useState('Todos');
    /*
    const handlePartido = event => {
        let data;
        console.log('1', event.target.value, selectedCandidatura)
        if (event.target.value === 'Todos') {
            if (selectedCandidatura !== 'Todos') {
                data = filterResults.filter(item => item.candidatura ? item.candidatura.includes(selectedCandidatura) : false);
            } else {
                data = filterResults.filter(item => true);
            }
        } else {
            if (selectedCandidatura !== 'Todos') {
                data = filterResults.filter(item => { console.log(); return (item.partido === event.target.value && item.candidatura.includes(selectedCandidatura))});
            } else {
                data = filterResults.filter(item => item.partido === event.target.value);
            }
        }
        setSelectedPartido(event.target.value)
        setFilteredData(data)
    }
    const handleCandidatura = event => {
        let data;
        console.log('2', event.target.value, selectedPartido)
        if (event.target.value === 'Todos') {
            if (selectedPartido !== 'Todos') {
                data = filterResults.filter(item => item.partido === selectedPartido);
            } else {
                data = filterResults.filter(item => true);
            }
        } else {
            if (selectedPartido !== 'Todos') {
                if (event.target.value === 'Diputado') {
                    data = filterResults.filter(item => item.candidatura ? item.candidatura.includes('Distrito') : false && item.partido === selectedPartido);
                } else {
                    data = filterResults.filter(item => item.candidatura === event.target.value && item.partido === selectedPartido);
                }
                
            } else {
                if (event.target.value === 'Diputado') {
                    data = filterResults.filter(item => item.candidatura ? item.candidatura.includes('Distrito') : false);
                } else {
                    data = filterResults.filter(item => item.candidatura === event.target.value);
                }
                
            }
            
        }
        setSelectedCandidatura(event.target.value)
        setFilteredData(data)
    }
    */

    const handlePartido = event => {
        let data;
        if (event.target.value === "Todos" && selectedCandidatura === "Todos") data = filterResults.filter(item => true);
        if (event.target.value === "Todos" && selectedCandidatura !== "Todos") data = filterResults.filter(item => (item.candidatura ? (item.candidatura).includes(selectedCandidatura) : false));
        if (event.target.value !== "Todos" && selectedCandidatura === "Todos") data = filterResults.filter(item => (item.candidatura ? (item.partido).includes(event.target.value) : false));
        if (event.target.value !== "Todos" && selectedCandidatura !== "Todos") data = filterResults.filter(item => (item.partido ? (item.partido).includes(event.target.value) : false) && (item.candidatura ? (item.candidatura).includes(selectedCandidatura) : false));
        setSelectedPartido(event.target.value)
        setFilteredData(data)
    }

    const handleCandidatura = event => {
        let data;
        console.log("2", event.target.value, selectedPartido)
        filterResults.filter(item => { console.log(item.candidatura); return ((item.candidatura) !== null) })
        if (event.target.value === "Todos" && selectedPartido === "Todos") data = filterResults.filter(item => true);
        if (event.target.value === "Todos" && selectedPartido !== "Todos") data = filterResults.filter(item => (item.partido ? (item.partido).includes(selectedPartido) : null));
        if (event.target.value !== "Todos" && selectedPartido === "Todos") data = filterResults.filter(item => (item.candidatura ? (item.candidatura).includes(event.target.value) : false));
        if (event.target.value !== "Todos" && selectedPartido !== "Todos") data = filterResults.filter(item => (item.candidatura ? (item.candidatura).includes(event.target.value) : false) && (item.partido ? (item.partido).includes(selectedPartido) : false));
        setSelectedCandidatura(event.target.value)
        setFilteredData(data)
    }



    const [cards, setCards] = useState([])
    const fetchCards = async () => {
        const response = db.collection('candidatosnl');
        const data = await response.get();
        let candidates = []
        data.docs.forEach(item => {
            let data = Object.values(item.data());

            for (var i = 0; i < data.length; i++) {
                data[i].url = Object.keys(item.data())[i];
            }

            candidates = [...candidates, ...data]
        })
        setCards(candidates)
    }
    useEffect(() => {
        fetchCards();
    }, [])

    useEffect(() => {
        const results = cards && cards.filter(card =>
            card.partido === filterCandidate || card.candidatura == filterCandidate || true
        )

        setFilterResults(results)
    }, [cards])

    const data = filteredData || filterResults;
    const cardsRender = data.map(item => {
        return (
            <tr>
                <td><img src={item.imagen ? item.imagen : 'https://i0.wp.com/prikachi.com/wp-content/uploads/2020/07/DPP1.jpg'} width={30} height={40} style={{ objectFit: 'cover' }}></img></td>
                <td style={{ textAlign: 'left' }}><Link to={'/CandidatoPerfil/' + item.url}>{item.nombre}</Link></td>
                <td>{item.partido}</td>
                <td>{item.candidatura}</td>
            </tr>
        )
    })

    return (
        <div>
            <div className="container">
                <div className="row justify-content-end" style={{ marginBottom: "15px", marginTop: "15px" }}>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Partido</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" onChange={handlePartido}>
                            <option selected value="Todos">Todos</option>
                            <option value="PAN">PAN</option>
                            <option value="PRI">PRI</option>
                            <option value="PRD">PRD</option>
                            <option value="PT">PT</option>
                            <option value="PVEM">PVEM</option>
                            <option value="MC">MC</option>
                            <option value="Morena">Morena</option>
                            <option value="PES">PES</option>
                            <option value="RSP">RSP</option>
                            <option value="Fuerza por México">Fuerza por México</option>
                            <option value="Nueva Alianza">Nueva Alianza</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Candidatura</label>
                        </div>
                    <select class="custom-select" id="inputGroupSelect01" onChange={handleCandidatura}>
                        <option selected>Todos</option>
                        <option value="Gobernador">Gobernador</option>
                        <option value="Presidencia Municipal">Presidencia Municipal</option>
                        <option value="Distrito">Diputado</option>
                    </select>
                    </div>
                </div>

                <div className="row">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Partido</th>
                                <th scope="col">Candidatura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardsRender}

                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default CandidatosGrid