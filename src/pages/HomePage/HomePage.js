import {SearchInput} from './SearchInput';
import React, {useEffect, useState} from 'react';
import {FlexContent} from '../../styles/Layout';
import styled from 'styled-components';
import {ProductsService} from '../../services/ProductsService';
import {ProductCard} from '../../components/ProductCard';
import {useHistory} from 'react-router-dom';

export const ColItemHome = styled.div`
  flex: 0 0 300px;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    // margin-right: 5rem;
  }
`;

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const historyPage = useHistory();

  useEffect(() => {
    ProductsService.getAllProducts().then((result) => {
      setProducts(result.results);
      console.log(result);
    });
  }, []);

  const addToCart = (product, quantity, size) => {
    historyPage.push(`/checkout`, {product, quantity, size});
  };

  const createItensHome = (itens) => {
    return itens.map((item, index) => {
      return (
        <ColItemHome key={ index }>
          <ProductCard
            product={ item }
            onClick={ addToCart.bind(null) }>
          </ProductCard>
        </ColItemHome>
      );
    });
  };

  return (
    <div>
      <SearchInput></SearchInput>
      <FlexContent>
        { createItensHome(products) }
      </FlexContent>
    </div>
  );
};
