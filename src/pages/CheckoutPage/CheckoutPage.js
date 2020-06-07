import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

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
    <div> Checkout Page Works!
      <span> { product.id }</span>
    </div>
  );
};
