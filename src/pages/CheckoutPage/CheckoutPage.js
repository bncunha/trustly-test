import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Titulo1, Titulo2} from '../../styles/Tipografia';
import {ProductCart} from './ProductCart';
import styled from 'styled-components';
import {InfoContainer} from '../../styles/Superficies';
import {PaymentCard} from './PaymentCard';
import onliePayment from '../../assets/online_payment.png';
import creditCardImg from '../../assets/master_payment.png';
import applePayment from '../../assets/apple_payment.png';
import {Buttons} from '../../styles/Buttons';

const PaymentTitle = styled(Titulo2)`
  margin-top: 2rem;
`;

export const CheckoutPage = () => {
  const history = useHistory();
  const payments = [
    {
      name: 'Online Banking',
      save: 10,
      flags: onliePayment,
    },
    {
      name: 'Card Payment',
      flags: creditCardImg,
    },
    {
      name: 'Apple Pay',
      flags: applePayment,
    },
  ];

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
      <PaymentTitle> Payment method </PaymentTitle>
      <InfoContainer>
        {
          payments.map((payment, index) =>
            <PaymentCard key={index}
              flags={payment.flags}
              name={payment.name}
              save={payment.save}>
            </PaymentCard>,
          )
        }
      </InfoContainer>
      <Buttons.Primary style={{marginTop: '1rem'}}>
        Continue
      </Buttons.Primary>
    </>
  );
};
