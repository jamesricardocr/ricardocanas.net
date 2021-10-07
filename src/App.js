import React, {Fragment} from 'react';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import "animate.css";

import Portafolio from './components/Portafolio';
import Home from './components/Home';
import Laborales from './components/Laborales';
import Academicos from './components/Academicos';
import Personales from './components/Personales';
import Diseños from './components/Diseños';


function App() {
  return (
    <Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component= {Home}/>
            <Route exact path='/Portafolio' component= {Portafolio}/>
            <Route exact path='/Laborales' component= {Laborales}/>
            <Route exact path='/Academicos' component= {Academicos}/>
            <Route exact path='/Diseños' component= {Diseños}/>
            <Route exact path='/Personales' component= {Personales}/>
          </Switch>
        </Router>

    </Fragment>
  );
}

export default App;
