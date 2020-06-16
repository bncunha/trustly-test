import styled from 'styled-components';
import {BREAKPOINTS} from './Variables';

export const Card = styled.div`
    background-color: #fff;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
`;

export const InfoContainer = styled.div`
    background-color: #F7F7F7;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const InfoContainerDeskNone = styled(InfoContainer)`
  @media(min-width: ${BREAKPOINTS.lg}) {
    padding: 0;
  }
`;

export const InfoContainerMobileNone = styled(InfoContainer)`
  @media(max-width: ${BREAKPOINTS.lg}) {
    background: none;
    padding: 0;
  }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Col = styled.div`
  flex: 1 0;
  ${(props) => {
    if (props.middle) {
      return 'display: flex; flex-wrap: wrap; align-items: center;';
    }
  }}
  max-width: ${(props) => getMaxWidth(props.size)};
  
  ${
  //  media query
  (props) => {
    if (props.lg) {
      return `
        @media(min-width: ${BREAKPOINTS.lg}) {
          max-width: ${getMaxWidth(props.lg)}
        }
      `;
    }
  }}
`;

const getMaxWidth = (size) => {
  if (size === 6) {
    return '50%';
  } else {
    return '100%';
  }
};
