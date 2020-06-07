import React from 'react';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
// import { Container } from './styles';

export const DeliveryContent = () => {
  return (
    <>
      <DetailsTitle> Delivery details</DetailsTitle>
      <DetailsInfo>
        John smith <br/>
        Phone no: 0133131345 <br/>
        Address: Redwood City, 2000
      </DetailsInfo>
    </>
  );
};
