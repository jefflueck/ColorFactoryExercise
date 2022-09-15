import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';

import NewColor from './NewColor';
import Color from './Color';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/colors/new">
        <NewColor />
      </Route>
      <Route exact path="/colors/:color">
        <Color />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
