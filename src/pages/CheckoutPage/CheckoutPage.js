import React from 'react';
import {useLocation} from 'react-router-dom';

export const CheckoutPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div> Checkout Page Works! </div>
  );
};
