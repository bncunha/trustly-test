import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Titulo1, Titulo2} from '../../styles/Tipografia';
import {ProductCart} from './ProductCart';
import styled from 'styled-components';
import {
  InfoContainer,
  InfoContainerMobileNone,
  InfoContainerDeskNone,
} from '../../styles/Superficies';
import {PaymentCard} from './PaymentCard';
import onliePayment from '../../assets/online_payment.png';
import creditCardImg from '../../assets/master_payment.png';
import applePayment from '../../assets/apple_payment.png';
import {Buttons} from '../../styles/Buttons';
// import {establishPayWithMyBank} from '../../create_transaction';
import {addEventPayWithMyBank} from '../../add_listener';
import {BREAKPOINTS} from '../../styles/Variables';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PaymentTitle = styled(Titulo2)`
  margin-top: 2rem;
  @media(min-width: ${BREAKPOINTS.lg}) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 2rem;
`;

const MobileTitle = styled(Titulo1)`
  display: block;
  margin-bottom: 2rem;
  @media(min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

const ButtonContinue = styled(Buttons.Primary)`
  margin-top: 1rem;
  @media(min-width: ${BREAKPOINTS.lg}) {
    margin-top: 0rem;
    max-width: 20rem;
    margin-left: auto;
    display: block;
  }
`;

export const CheckoutPage = () => {
  const [paymentSelected, setPaymentSelected] = useState('Online Banking');
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
    addEventPayWithMyBank();
    console.log(history.location.state);
    if (history.location.state && !history.location.state.product) {
      history.replace('/');
    }
  }, [history]);

  const handleValueChange = (paymentSelected) => {
    setPaymentSelected(paymentSelected);
  };

  const finishCheckout = (e) => {
    e.preventDefault();
    if (paymentSelected === 'Online Banking') {
      // establishPayWithMyBank(() => {
      history.replace(`/confirmation`, history.location.state);
      // });
    } else {
      alert('Prease, select online banking!');
    }
    return;
  };

  return (
    <>
      <Row>
        <Col lg={5} className="d-none d-lg-block">
          <ProductImage
            alt={ history.location.state.product.description }
            src={ history.location.state.product.maxresURL }/>
        </Col>

        <Col lg={7}>
          <MobileTitle> Checkout </MobileTitle>
          <InfoContainerMobileNone>
            <InfoContainer>
              <ProductCart product={ history.location.state.product }
                quantity={history.location.state.quantity}
                size={history.location.state.size}></ProductCart>
            </InfoContainer>
            <form>
              <PaymentTitle>
                {
                  window.innerWidth >= 992 ?
                  'Select your payment method' :
                  'Payment method'
                }
              </PaymentTitle>
              <InfoContainerDeskNone>
                {
                  payments.map((payment, index) =>
                    <PaymentCard key={index}
                      flags={payment.flags}
                      name={payment.name}
                      selected={paymentSelected}
                      onValueChange={ handleValueChange.bind(null) }
                      save={payment.save}>
                    </PaymentCard>,
                  )
                }
              </InfoContainerDeskNone>
              <ButtonContinue
                onClick={ finishCheckout }>
                Continue
              </ButtonContinue>
            </form>
          </InfoContainerMobileNone>
        </Col>
      </Row>
    </>
  );
};
