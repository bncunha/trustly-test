import React from 'react';
import {Card as CardDefault, Row, Col} from '../../styles/Superficies';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {BREAKPOINTS} from '../../styles/Variables';

const Card = styled(CardDefault)`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  min-height: 4.75rem;
`;

const PaymentName = styled.span`
  font-size: 0.9rem;
  display: block;
`;

const SaveBadge = styled.span`
  background: #FFCC00;
  padding: 0.2rem 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.72rem;
  font-weight: bold;
  color: #9E7D27;
  border-radius: 5px;

  @media(min-width: ${BREAKPOINTS.lg}) {
    position: absolute;
    top: -0.8rem;
  }
`;

const Input = styled.input`
  &:checked + label > ${Card} {
    border: 2px solid #63B55C;
  }

  @media(min-width: ${BREAKPOINTS.lg}) {
    &:checked + label > ${Card} {
      border: 1px solid #63B55C;
    }
  }
`;

const ImgCards = styled.img`
  max-width: 100%;
  @media(min-width: ${BREAKPOINTS.lg}) {
    max-width: 10rem;
  }
`;

export const PaymentCard = (props) => {
  return (
    <>
      <Input
        id={ props.name }
        style={{display: 'none'}}
        name="selectPayment"
        value={props.name}
        checked={props.selected === props.name}
        onChange={() => props.onValueChange(props.name)}
        type="radio"/>
      <label style={{width: '100%'}} htmlFor={ props.name }>
        <Card style={{display: 'flex', position: 'relative'}}>
          <Row>
            <Col size={6} middle>
              <PaymentName> { props.name } </PaymentName>
              { props.save && <SaveBadge> SAVE ${props.save} </SaveBadge> }
            </Col>
            <Col size={6} middle style={{justifyContent: 'flex-end'}}>
              <ImgCards
                src={props.flags}
                alt="Flags"/>
            </Col>
          </Row>
        </Card>
      </label>
    </>
  );
};

PaymentCard.propTypes = {
  name: PropTypes.string,
  flags: PropTypes.string,
  save: PropTypes.number,
  selected: PropTypes.string,
  onValueChange: PropTypes.func,
};
