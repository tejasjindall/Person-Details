import logo from './logo.svg';
import './App.css';
import Pdetails from './Components/Pdetails';
import PrsnDetails from './Components/PrsnDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FullDetails from './Components/FullDetails';

function App() {
  return (
    <Router>
    <div className="App">
  
     
     <Switch>
     <Route path="/myhome" exact component={PrsnDetails}/>
     <Route path="/adrs/:id" component={FullDetails}/>
     </Switch>
    </div>
    </Router>
  );
} 

export default App;
