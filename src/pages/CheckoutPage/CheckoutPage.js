import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Titulo1} from '../../styles/Tipografia';
import {ProductCart} from './ProductCart';

export const CheckoutPage = () => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.state && !history.location.state.product) {
      history.replace('/');
    }
  }, [history]);

  return (
    <>
      <Titulo1> Checkout </Titulo1>
      <ProductCart product={ history.location.state.product }
        quantity={history.location.state.quantity}
        size={history.location.state.size}></ProductCart>
    </>
  );
};
