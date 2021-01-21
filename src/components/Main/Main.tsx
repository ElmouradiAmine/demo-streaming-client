import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Content from './Content/Content';
import Home from './Home/Home';

import './Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>

      <Route path="/series">
        <Content title="Popular Series" programType="series" />
      </Route>

      <Route path="/movies">
        <Content title="Popular Movies" programType="movie" />
      </Route>

      <Redirect to="/" />
    </Switch>
  </main>
);

export default Main;
