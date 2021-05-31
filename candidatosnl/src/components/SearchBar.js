import React, { useState } from 'react'
import './SearchBar.css'
import { Typeahead } from 'react-bootstrap-typeahead';
import { useHistory } from 'react-router-dom';

function SearchBar(props) {
    const history = useHistory();
    const [selectedCandidate, setSelectedCandidate] = useState();
    let data = props.allCandidates.map(item => {
        return {id: item.url, name: item.nombre}
    })

    const handleChange = val => {
        console.log(val)
        setSelectedCandidate(val[0].id)
    }

    const handleSearch = () => {
        if (selectedCandidate) {
            history.push('/CandidatoPerfil/' + selectedCandidate);
        }
    }
    return (
        <div class="searchBar">
        <form class="form-inline my-2 my-lg-2">
                    <Typeahead 
            id="basic-typeahead-single"
            labelKey="name"
            options={data}
            placeholder="Buscar candidatos..."
            onChange = {handleChange}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
        </form>
        </div>
    )
}
export default SearchBar;