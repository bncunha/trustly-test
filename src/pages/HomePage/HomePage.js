import {SearchInput} from './SearchInput';
import React, {useEffect, useState} from 'react';
import {FlexContent} from '../../styles/Layout';
import styled from 'styled-components';
import {ProductsService} from '../../services/ProductsService';
import {ProductCard} from '../../components/ProductCard';

export const ColItemHome = styled.div`
  flex: 1 0 300px;
  margin-top: 2rem;

  &:not(:last-child) {
    // margin-right: 5rem;
  }
`;

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsService.getAllProducts().then((result) => {
      console.log(result); setProducts(result.results);
    });
  }, []);

  const createItensHome = (itens) => {
    return itens.map((item, index) => {
      return (
        <ColItemHome key={ index }>
          <ProductCard product={ item }></ProductCard>
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
