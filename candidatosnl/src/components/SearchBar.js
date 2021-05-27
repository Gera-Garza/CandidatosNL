import React from 'react'
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div class="searchBar">
        <form class="form-inline my-2 my-lg-2">
            <input class="form-control mr-sm-2" 
            type="search" 
            placeholder="Buscar candidatos..." 
            aria-label="Search"
            value = {props.searchTerm} 
            onChange = {props.handleChange}
            />
        </form>
        </div>
    )
}
export default SearchBar;