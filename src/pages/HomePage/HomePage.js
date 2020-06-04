import {SearchInput} from './SearchInput';
import React from 'react';
import {FlexContent} from '../../styles/Layout';
import styled from 'styled-components';

export const ColItemHome = styled.div`
  flex: 1 0 300px;
  margin-top: 2rem;

  &:not(:last-child) {
    margin-right: 5rem;
  }
`;

export const HomePage = () => {
  const createItensHome = (itens) => {
    return itens.map((item, index) => {
      return (
        <ColItemHome key={ index }> item </ColItemHome>
      );
    });
  };

  return (
    <div>
      <SearchInput></SearchInput>
      <FlexContent>
        { createItensHome([1, 2, 3]) }
      </FlexContent>
    </div>
  );
};
