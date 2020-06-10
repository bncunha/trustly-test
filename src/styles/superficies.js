import styled from 'styled-components';

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
  max-width: ${(props) => {
    if (props.size === 6) {
      return '50%';
    }
  }}
`;
