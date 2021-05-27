import React from 'react'
import './Home.css'
import NewsGrid from './NewsGrid';
import SearchBar from './SearchBar';

function Home() {
    return (
        <div>
       <SearchBar/>
       <div class="container" style={{paddingBottom: "10px"}}>
           <h1 className="text-left">Últimas noticias</h1>
           <NewsGrid/>
           </div>
       </div>
    )
}
export default Home;