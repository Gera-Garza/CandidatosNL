import React from 'react'
import './Home.css'
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';

function Home() {
    return (
        <div>
       <SearchBar/>
       <div class="container" style={{paddingBottom: "10px"}}>
           <h1 className="text-left">Últimas noticias</h1>
           <div className="row" style={{paddingBottom: "30px"}}>
           <NewsCard/>
           <NewsCard/>
           <NewsCard/>
           </div>
           <div className="row">
           <NewsCard/>
           <NewsCard/>
           <NewsCard/>
           </div>
       </div>
        </div>
    )
}
export default Home;