import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Titulo1} from '../../styles/Tipografia';
import {ProductCart} from './ProductCart';

export const CheckoutPage = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (history.location.state && history.location.state.product) {
      setProduct(history.location.state.product);
    } else {
      history.replace('/');
    }
  }, [history]);

  return (
    <>
      <Titulo1> Checkout </Titulo1>
      <ProductCart product={ product }></ProductCart>
    </>
  );
};
