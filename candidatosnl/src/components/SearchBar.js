import React from 'react'
import './SearchBar.css'
import { Typeahead } from 'react-bootstrap-typeahead'

function SearchBar(props) {
    let data = props.allCandidates.map(item => {
        return item.nombre
    })
    return (
        <div class="searchBar">
        <form class="form-inline my-2 my-lg-2">
                    <Typeahead 
            id="basic-typeahead-single"
            labelKey="name"
            options={data}
            placeholder="Buscar candidatos..."
            onChange = {props.handleChange}
            />
            <button className="btn btn-primary" >Buscar</button>
        </form>
        </div>
    )
}
export default SearchBar;