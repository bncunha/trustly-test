import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ProductInfoContent} from './ProductIndoContent';
import {DeliveryContent} from './DeliveryContent';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
import CurrencyFormat from 'react-currency-format';
import {InfoContainer} from '../../styles/Superficies';

const ImageWrapper = styled.div`
  position: relative;
  flex: 0 1 5.75rem;
  height: 7.2rem;
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

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const TotalText = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
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
            quantity={quantity}
            size={size}>
          </ProductInfoContent>
        </ProductInfoWrapper>

        <div>
          <DeliveryContent></DeliveryContent>
        </div>
      </InfoWrapper>

      <TotalWrapper>
        <div>
          <DetailsTitle> Total cost </DetailsTitle>
          <DetailsInfo> Delivery included </DetailsInfo>
        </div>
        <div>
          <TotalText>
            <CurrencyFormat value={product.price * quantity}
              displayType={'text'}
              thousandSeparator={true} prefix={'$'} />
          </TotalText>
        </div>
      </TotalWrapper>
    </InfoContainer>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  size: PropTypes.number,
};

