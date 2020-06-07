import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {CheckoutPage} from '../pages/CheckoutPage/CheckoutPage';

const routes = [
  {path: '/checkout/:id', componente: CheckoutPage},
  {path: '/', componente: HomePage},
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
