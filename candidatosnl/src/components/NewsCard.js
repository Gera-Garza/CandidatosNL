import React from 'react'


const NewsCard = (props) => {
    return (
        <div className="col-sm">
            <div className="card" style={{width:"18rem", marginBottom: "30px"}}>
                <img className="card-img-top" src={props.imagen} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href={props.enlace} className="btn btn-primary" target="_blank">Ver noticia</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
