import React from 'react';
import {Titulo2Bold} from '../../styles/Tipografia';
import styled from 'styled-components';
import {Col} from '../../styles/Superficies';
import greenBank from '../../assets/green-bank-icon.png';
import {TotalCost} from '../CheckoutPage/TotalCost';
import PropTypes from 'prop-types';

const ImagePayment = styled.img`
  height: 2.5rem;
  margin-right: 0.5rem;
`;

const Divisor = styled.hr`
  border: 1px solid #D6D6D6;
  width: 100%;
  margin: 1.5rem 0;
`;
export const PaymentMethod = (props) => {
  return (
    <>
      <Titulo2Bold style={{width: '100%'}}> Payment Method </Titulo2Bold>
      <Col middle>
        <ImagePayment src={greenBank} alt="Green Bank"/>
        <p> Online Banking</p>
      </Col>
      <Divisor></Divisor>
      <Col>
        <TotalCost total={props.total}></TotalCost>
      </Col>
    </>
  );
};

PaymentMethod.propTypes = {
  total: PropTypes.number,
};

