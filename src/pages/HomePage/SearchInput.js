import styled from 'styled-components';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {BREAKPOINTS} from '../../styles/Variables';


const SearchContent = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.6rem;
`;

const LupaIcon = styled(FontAwesomeIcon) `
  color: #787878;
  font-size: 1.2rem;
  margin-right: 0.8rem;

  @media(min-width: ${BREAKPOINTS.md}) {
    position: absolute;
    left: 2.6rem;
  }
`;

const SearchField = styled.input`
  font-weight: 300;
  font-size: 1.25rem;
  border: none;
  text-align: center;
  color: #A8A8A8;
`;


export const SearchInput = (props) => {
  return (
    <SearchContent>
      <LupaIcon icon={faSearch}></LupaIcon>
      <SearchField
        onInput={ (e) => props.onInput(e.target.value)}
        placeholder="Search for your sneaker">
      </SearchField>
    </SearchContent>
  );
};

SearchInput.propTypes = {
  onInput: PropTypes.func,
};
