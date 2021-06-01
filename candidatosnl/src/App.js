import './App.css';
import Home from'./components/Home';
import CandidatosGrid from'./components/CandidatosGrid';
import CandidatoPerfil from './components/CandidatoPerfil'
import {Route} from 'react-router-dom';
import Navbar from "./components/NavBar";
import Acerca from './components/Acerca';
import TiposCandidaturas from './components/TiposCandidaturas';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/Candidatos" component={CandidatosGrid}/>
      <Route exact path="/CandidatoPerfil/:id" component={CandidatoPerfil}/>
      <Route path="/tipos-candidaturas" component={TiposCandidaturas}/>
      <Route path="/Nosotros" component={Acerca}/>
    </div>
  );
}

export default App;
