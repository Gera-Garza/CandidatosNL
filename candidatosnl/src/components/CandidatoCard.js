import React from 'react'

const CandidatoCard = (props) => {


    console.log(props)
    return (
        <div>
            <div className="col-sm" style={{marginBottom: "30px"}}>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.imagen} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.nombre}</h5>
                        <p className="card-text">{props.body}</p>
                        <a href="#" className="btn btn-primary">Ver candidato</a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CandidatoCard
