import './App.css';
import Home from'./Home';
import Gobernadores from'./Gobernadores';
import Ayuntamiento from'./Ayuntamiento';
import Diputados from'./diputados';
import {Route} from 'react-router-dom';
import Navbar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Gobernadores" component={Gobernadores}/>
      <Route exact path="/Ayuntamiento" component={Ayuntamiento}/>
      <Route exact path="/diputados" component={Diputados}/>
    </div>
  );
}

export default App;
