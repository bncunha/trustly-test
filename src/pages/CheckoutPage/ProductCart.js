import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ProductInfoContent} from './ProductIndoContent';
import {DeliveryContent} from './DeliveryContent';
import {Titulo2Bold} from '../../styles/Tipografia';
import {TotalCost} from './TotalCost';
import {BREAKPOINTS} from '../../styles/Variables';

const ImageWrapper = styled.div`
  position: relative;
  flex: 0 1 5.75rem;
  height: ${(props) => props.squareImage ? '6rem;' : '7.2rem;'};
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

  @media(min-width: ${BREAKPOINTS.lg}) {
    margin: 0;
  }
`;

const ProductInfoWrapper = styled.div`
  margin-bottom: 1rem;
`;

const CartTotal = styled.span`
  display: none;
  font-size: 1.2rem;
  font-family: Open Sans;
  margin-bottom: 1rem;

  @media(min-width: ${BREAKPOINTS.lg}) {
    display: block;
  }
`;

export const ProductCart = ({
  product,
  quantity,
  size,
  title,
  showDelivery = true,
  showTotal = true,
  squareImage}) => {
  return (
    <>
      { title && <Titulo2Bold style={{width: '100%'}}> {title} </Titulo2Bold>}
      <ImageWrapper squareImage={squareImage} className="d-block d-lg-none">
        <ProductImage
          src={ product.thumbnailURL }
          alt={product.description + ' Image'}/>
      </ImageWrapper>

      <InfoWrapper>
        <ProductInfoWrapper>
          <CartTotal> Cart total</CartTotal>
          <ProductInfoContent
            product={product}
            quantity={quantity}
            size={size}>
          </ProductInfoContent>
        </ProductInfoWrapper>

        {
          showDelivery &&
          <div style={{marginRight: '1rem'}}>
            <DeliveryContent></DeliveryContent>
          </div>
        }

      </InfoWrapper>

      {
        showTotal && <TotalCost total={product.price * quantity}></TotalCost>
      }
    </>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  size: PropTypes.number,
  title: PropTypes.string,
  showDelivery: PropTypes.bool,
  showTotal: PropTypes.bool,
  squareImage: PropTypes.bool,
};

