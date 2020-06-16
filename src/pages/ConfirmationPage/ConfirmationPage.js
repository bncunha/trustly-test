import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {ProductCart} from '../CheckoutPage/ProductCart';
import {Titulo1} from '../../styles/Tipografia';
import {
  InfoContainerDeskNone,
  InfoContainerMobileNone} from '../../styles/Superficies';
import {PaymentMethod} from './PaymentMethod';
import {Buttons} from '../../styles/Buttons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import {TotalCost} from '../CheckoutPage/TotalCost';

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 2rem;
`;

export const ConfirmationPage = () => {
  const history = useHistory();
  const state = history.location.state;
  useEffect(() => {
    if (!history.location.state ||
      (history.location.state && !history.location.state.product)) {
      history.replace('/');
    }
  }, [history]);

  return (
    <Row>
      <Col lg={6} className="d-none d-lg-block">
        <ProductImage
          alt={ history.location.state.product.description }
          src={ history.location.state.product.maxresURL }/>
      </Col>
      <Col lg={6}>
        <Titulo1 className="d-block d-lg-none">
          Review and confirmation
        </Titulo1>
        <InfoContainerMobileNone>
          <Row>
            <Col lg={6}>
              <InfoContainerDeskNone>
                <ProductCart
                  title="Order Summary"
                  showCartTotalTitle={false}
                  showDelivery={false}
                  showTotal={false}
                  squareImage={true}
                  product={ history.location.state.product }
                  quantity={history.location.state.quantity}
                  size={history.location.state.size}></ProductCart>
              </InfoContainerDeskNone>
            </Col>
            <Col lg={6}>
              <InfoContainerDeskNone
                className="m-lg-0"
                style={{marginTop: '2rem'}}>
                <PaymentMethod></PaymentMethod>
                <TotalCost
                  hideDesktop={true}
                  alignLeft={false}
                  total={Number(state.product.price) * state.quantity}>
                </TotalCost>
              </InfoContainerDeskNone>
            </Col>
            <Col lg={6}>
              <TotalCost
                hideMobile={true}
                alignLeft={false}
                total={Number(state.product.price) * state.quantity}>
              </TotalCost>
            </Col>
            <Col lg={6}>
              <Buttons.LinkPrimary to="/" style={{marginTop: '2rem'}}>
                Place order
              </Buttons.LinkPrimary>
            </Col>
          </Row>
        </InfoContainerMobileNone>
      </Col>
    </Row>
  );
};
