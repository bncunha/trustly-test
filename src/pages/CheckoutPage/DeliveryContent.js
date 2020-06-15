import React from 'react';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
import styled from 'styled-components';
import {BREAKPOINTS} from '../../styles/Variables';

export const DeliveryTitle = styled(DetailsTitle)`
  @media(min-width: ${BREAKPOINTS.lg}) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;


export const DeliveryContent = () => {
  return (
    <>
      <DeliveryTitle> Delivery details</DeliveryTitle>
      <DetailsInfo>
        John smith <br/>
        Phone no: 0133131345 <br/>
        Address: Redwood City, 2000
      </DetailsInfo>
    </>
  );
};
