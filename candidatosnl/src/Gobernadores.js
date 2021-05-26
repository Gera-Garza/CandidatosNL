import React from 'react'
import './Gobernadores.css'

function Gobernadores(){
   
    return(
        <div>
             <h2>Gobernadores</h2>
             <div class="card">
                    <p>Avatar</p>
                    <div class="container">
                    <h4><b>John Doe</b></h4> 
                    <p>Candidato del Morena</p> 
                </div>
            </div>
            <div class="card">
                    <p>Avatar</p>
                    <div class="container">
                    <h4><b>Mery Poppings</b></h4> 
                    <p>Candidato del PRI</p> 
                </div>
            </div>
            <div class="card">
                    <p>Avatar</p>
                    <div class="container">
                    <h4><b>Guillermo Torres</b></h4> 
                    <p>Candidato del PAN</p> 
                </div>
            </div>
        </div>
    )
}
export default Gobernadores;