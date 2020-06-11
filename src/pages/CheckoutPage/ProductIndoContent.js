import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {DetailsInfo} from '../../styles/Tipografia';

const ProductName = styled.span`
  color: #000;
  font-size: 1.2rem;
`;

export const ProductInfoContent = (props) => {
  return (
    <>
      <ProductName> { props.product.description } </ProductName>
      <DetailsInfo>
        x{ props.quantity },
        { props.product.color },
        Size { props.size } <br/>
        Item #{ props.product.id }
      </DetailsInfo>
    </>
  );
};

ProductInfoContent.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  size: PropTypes.number,
};
