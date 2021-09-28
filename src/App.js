import React, {Fragment} from 'react';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import Portafolio from './components/Portafolio';
import Whatsapp from './components/Whatsapp';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
        <Router>
        <Switch>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/Portafolio' component= {Portafolio}/>
          <Route exact path='/Whatsapp' component= {Whatsapp}/>
          

        </Switch>
          
        </Router>

    </Fragment>
  );
}

export default App;
