import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

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
  const history = useHistory();
  const [isRoot, setIsRoot] = useState(history.location.pathname === '/');

  history.listen((r) => {
    setIsRoot(r.pathname === '/');
  });

  const showBackButton = () => {
    return isRoot ? <></> : backButton();
  };

  const backButton = () => {
    return (
      <BackContent onClick={() => history.goBack()}>
        <BackArrowIcon icon={faArrowLeft} />
        <span> Back </span>
      </BackContent>
    );
  };

  return showBackButton();
};
