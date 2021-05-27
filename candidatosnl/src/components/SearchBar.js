import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div class="searchBar">
        <form class="form-inline my-2 my-lg-2">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar candidatos..." aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar candidato</button>
        </form>
        </div>
    )
}
export default SearchBar;