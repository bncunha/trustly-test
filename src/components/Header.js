import React from 'react';
import styled from 'styled-components';
import {BackButton} from './BackButton';
import avatar from '../assets/avatar.png';

const HeaderContent = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${(props) => props.src});
  margin-left: auto;
`;

export const Header = () => {
  return (
    <HeaderContent>
      <BackButton></BackButton>
      <Avatar alt="Avatar" src={avatar} />
    </HeaderContent>
  );
};
