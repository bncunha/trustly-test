import React from 'react';
import {Switch, Route} from 'react-router-dom';

const routes = [
];

export const MainRoutes = () => {
  return (
    <Switch>
      {
        routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={ route.path }
              component={ route.componente }>
            </Route>
          );
        })
      }
    </Switch>
  );
};
