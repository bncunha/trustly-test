import React, {useState} from 'react';
import {Card} from '../styles/Superficies';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {FlexContent as FlexContentDefault} from '../styles/Layout';
import {Buttons} from '../styles/Buttons';

const theme = {
  principalTexts: `
    color: #000;
    display: block;
    text-align: center;
  `,
};

const ProductImg = styled.img`
  width: 100%;
`;

const ProductName = styled.span`
  ${theme.principalTexts}
  font-size: 1.25rem;
  margin: 0.7rem;
`;

const ProductInfo = styled.div`
  padding: 0.5rem;
`;

const ProductPrice = styled.span`
  ${theme.principalTexts}
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0.7rem;
`;

const FormContent = styled(FlexContentDefault)`
  justify-content: space-around;
  align-items: center;
  max-width: 90%;
  margin: auto;
`;

const Label = styled.label`
  font-size: 0.85rem;
  color: #8D8D8D;
`;

const SelectRounded = styled.select`
  border: 1px solid #E8E8E8;
  border-radius: 25px;
  color: #808080;
  padding: 0.2rem 1.4rem 0.2rem 0.5rem;
`;


export const ProductCard = ({product, onClick}) => {
  const [qtd, setQuantity] = useState(1);
  const [size, setSize] = useState(41);

  const createProductForm = (label, values, bindValue, onChangeHandle) => {
    const uniqueID = label + new Date().getTime();
    return (
      <>
        <Label htmlFor={uniqueID}> { label } </Label>
        <SelectRounded id={uniqueID}
          value={bindValue}
          onChange={(e) => onChangeHandle(Number(e.target.value))}>
          {
            values.map((v, index) => (
              <option key={index} value={ v }> { v } </option>
            ))
          }
        </SelectRounded>
      </>
    );
  };

  return (
    <Card>
      <ProductImg src={ product.thumbnailURL }></ProductImg>
      <ProductName> { product.description } </ProductName>
      <ProductInfo>
        <FormContent>
          { createProductForm('Size', [41, 42], size, setSize) }
          { createProductForm('Quantity', [1, 2], qtd, setQuantity) }
        </FormContent>
        <ProductPrice> { product.price } </ProductPrice>
        <Buttons.Primary onClick={() => onClick(product, qtd, size) }>
          Add to cart
        </Buttons.Primary>
      </ProductInfo>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};
