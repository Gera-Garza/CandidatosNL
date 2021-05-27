import React from 'react'
import './Home.css'
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';

function Home() {
    return (
        <div>

       <SearchBar/>
       <div class="container">
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