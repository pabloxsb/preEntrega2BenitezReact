import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import './App.css';
import NavBar from './components/NavBar/Navbar'
import AboutUs from './components/Page/AboutUs'
import Fish from './components/Page/Fish'
import Inicio from './components/Page/Inicio'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    
      <Router>
      <NavBar/>       
      </Router>
      <ItemListContainer greeting={"Bienbenidos a Malawi"} />
    </div>
  );
}

export default App;
