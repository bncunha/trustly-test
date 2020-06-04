import styled from 'styled-components';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchContent = styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.6rem;
`;

const LupaIcon = styled(FontAwesomeIcon) `
  color: #787878;
  font-size: 1.2rem;
  margin-right: 0.8rem;
`;

const SearchField = styled.input`
  font-weight: 300;
  font-size: 1.25rem;
  border: none;
  text-align: center;
  color: #A8A8A8;
`;


export const SearchInput = () => {
  return (
    <SearchContent>
      <LupaIcon icon={faSearch}></LupaIcon>
      <SearchField placeholder="Search for your sneaker"></SearchField>
    </SearchContent>
  );
};
