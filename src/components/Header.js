import React, {useState} from 'react';
import styled from 'styled-components';
import {BackButton} from './BackButton';
import avatar from '../assets/avatar.png';
import {BREAKPOINTS} from '../styles/Variables';
import {Titulo1} from '../styles/Tipografia';
import {useHistory} from 'react-router-dom';
import {routes} from '../routes/Main.routes';

const HeaderContent = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  @media(min-width: ${BREAKPOINTS.lg}) {
    background: #F1F1F1;
  }
`;

const ButtonWrapper = styled.div`
  @media(min-width: ${BREAKPOINTS.lg}) {
    position: absolute;
    left: 1rem;
  }
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${(props) => props.src});
  @media(min-width: ${BREAKPOINTS.lg}) {
    position: absolute;
    right: 1rem;
  }
`;

const Pagetitle = styled(Titulo1)`
  margin: 0;
  display: none;
  font-family: Arial;

  @media(min-width: ${BREAKPOINTS.lg}) {
    display: block;
    margin: auto;
  }
`;

export const Header = () => {
  const getTitlePage = (path) => {
    const finded = routes.find((r) =>
      path.length === 1 ?
      r.path === path :
      r.path.indexOf(path) >= 0,
    );
    return finded ? finded.data.title : null;
  };

  const history = useHistory();
  const [titlePage, setTitlePage] =
    useState(getTitlePage(history.location.pathname));


  history.listen((r) => {
    setTitlePage(getTitlePage(r.pathname));
  });

  return (
    <HeaderContent>
      <ButtonWrapper>
        <BackButton></BackButton>
      </ButtonWrapper>
      <Pagetitle> { titlePage } </Pagetitle>
      <Avatar alt="Avatar" src={avatar} />
    </HeaderContent>
  );
};
