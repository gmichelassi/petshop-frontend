import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Calendario from './pages/Calendario/Calendario'
import Agendamentos from './pages/Agendamentos/Agendamentos'

import './App.css';

  function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/calendario" component={ Calendario } />
        <Route path="/agendamentos" component={ Agendamentos } />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;

