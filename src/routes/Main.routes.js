import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from '../pages/HomePage/HomePage';
import {CheckoutPage} from '../pages/CheckoutPage/CheckoutPage';
import {ConfirmationPage} from '../pages/ConfirmationPage/ConfirmationPage';

export const routes = [
  {
    path: '/confirmation',
    componente: ConfirmationPage,
    data: {title: 'Review and Confirmation'},
  },
  {path: '/checkout', componente: CheckoutPage, data: {title: 'Checkout'}},
  {path: '/', componente: HomePage, data: {title: 'Sneakers'}},
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
