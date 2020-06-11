import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ProductCart} from '../CheckoutPage/ProductCart';
import {Titulo1} from '../../styles/Tipografia';
import {InfoContainer} from '../../styles/Superficies';
import {PaymentMethod} from './PaymentMethod';
import {Buttons} from '../../styles/Buttons';

export const ConfirmationPage = () => {
  const history = useHistory();
  console.log(history.location.state);
  const state = history.location.state;
  useEffect(() => {
    if (!history.location.state ||
      (history.location.state && !history.location.state.product)) {
      history.replace('/');
    }
  }, [history]);

  return (
    <div>
      <Titulo1> Review and confirmation </Titulo1>
      <ProductCart
        title="Order Summary"
        showDelivery={false}
        showTotal={false}
        squareImage={true}
        product={ history.location.state.product }
        quantity={history.location.state.quantity}
        size={history.location.state.size}></ProductCart>

      <InfoContainer style={{marginTop: '2rem'}}>
        <PaymentMethod
          total={Number(state.product.price) * state.quantity}>
        </PaymentMethod>
      </InfoContainer>

      <Buttons.LinkPrimary to="/" style={{marginTop: '2rem'}}>
        Place order
      </Buttons.LinkPrimary>
    </div>
  );
};
