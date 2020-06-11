import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {CheckoutPage} from '../pages/CheckoutPage/CheckoutPage';
import {ConfirmationPage} from '../pages/ConfirmationPage/ConfirmationPage';

const routes = [
  {path: '/confirmation', componente: ConfirmationPage},
  {path: '/checkout', componente: CheckoutPage},
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
