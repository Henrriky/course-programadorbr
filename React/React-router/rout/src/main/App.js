import './App.css';
import React from 'react';

import Nav from '../components/Nav';
import Aulas from '../components/Aulas';
import Home from '../components/Home';
import Sobre from '../components/Sobre';
import Aula from '../components/Aula';
import Assistir from '../components/Assistir';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/aulas/:id">
              <Aula></Aula>
            </Route>
            <Route path="/aulas">
              <Aulas/>
            </Route>
            <Route p  ath="/sobre">
              <Sobre/>
            </Route>
            <Route path="/assistir">
              <Assistir/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}

export default App;
