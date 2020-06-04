import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackContent = styled.a`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.2rem 1.1rem;
`;

const BackArrowIcon = styled(FontAwesomeIcon) `
  margin-right: 0.3rem;
`;

export const BackButton = () => {
  return (
    <BackContent>
      <BackArrowIcon icon={faArrowLeft} />
      <span> Back </span>
    </BackContent>
  );
};
