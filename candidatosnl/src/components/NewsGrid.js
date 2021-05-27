import React, { useState, useEffect } from 'react'
import db from '../services/firebase'
import NewsCard from './NewsCard'

const NewsGrid = () => {
    const [cards, setCards] = useState([])
    const fetchCards = async () => {
        const response = db.collection('noticias')
        const data = await response.get()
        let news = []
        data.docs.forEach(item => {
            news = [...news, ...Object.values(item.data())]
        })
        setCards(news)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    return (
        <div className="row">
            {
                cards && cards.map(card => {
                    console.log(card)
                    return (
                        <NewsCard key={card.titulo} titulo={card.titulo} descripcion={card.descripcion} imagen={card.imagen} enlace={card.enlace} />
                    )
                })
            }
        </div>
    )
}

export default NewsGrid
