import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <main>
          <Switch>
            {routerRoutes()}
          </Switch>
        </main>
      </Fragment>
    </Router>
  );
}
