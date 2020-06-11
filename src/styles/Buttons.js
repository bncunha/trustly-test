import styled from 'styled-components';
import {COLORS} from './Variables';
import {Link} from 'react-router-dom';

const mainButton = `
  background-color: ${COLORS.mainColor};
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 5px;
  border: none;
  padding: 0.7rem 1rem;
  font-weight: 600;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  text-align: center;
`;

export const Buttons = {
  Primary: styled.button`
    ${mainButton}
  `,
  LinkPrimary: styled(Link)`
    ${mainButton}
  `,
};
