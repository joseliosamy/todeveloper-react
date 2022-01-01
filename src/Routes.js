// Utilities
import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Partial components
import Home from './pages/Home';

// pages
import About from './pages/Sobre';
import Events from './pages/Eventos';
import PageEvent from './pages/PageEvento';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/sobre">
        <About />
      </Route>

      <Route exact path="/eventos">
        <Events />
      </Route>

      <Route exact path="/eventos/*">
        <PageEvent />
      </Route>

      <Route exact path="/ferramentas">
        Ferramentas
      </Route>

      <Route path="*">Erro 404.</Route>
    </Switch>
  );
}

export default Routes;
