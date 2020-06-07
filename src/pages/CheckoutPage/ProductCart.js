import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ProductInfoContent} from './ProductIndoContent';
import {DeliveryContent} from './DeliveryContent';

const InfoContainer = styled.div`
  background-color: #F7F7F7;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 0 1 5.75rem;
  height: 6.2rem;
  overflow: hidden;
  border-radius: 10px;
`;

const ProductImage = styled.img`
  height: 100%;
  left: calc(-50%);
  position: absolute;
`;

const InfoWrapper = styled.div`
  flex: 1 1 9.25rem;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductInfoWrapper = styled.div`
  margin-bottom: 1rem;

`;

const DeliveryWrapper = styled.div`
`;

export const ProductCart = ({product, quantity, size}) => {
  console.log(product);
  return (
    <InfoContainer>
      <ImageWrapper>
        <ProductImage
          src={ product.thumbnailURL }
          alt={product.description + ' Image'}/>
      </ImageWrapper>

      <InfoWrapper>
        <ProductInfoWrapper>
          <ProductInfoContent
            product={product}
            quantity={quantity}>
          </ProductInfoContent>
        </ProductInfoWrapper>

        <DeliveryWrapper>
          <DeliveryContent></DeliveryContent>
        </DeliveryWrapper>
      </InfoWrapper>

    </InfoContainer>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  size: PropTypes.number,
};

