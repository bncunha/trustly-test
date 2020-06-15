import React from 'react';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
import {BREAKPOINTS} from '../../styles/Variables';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media(min-width: ${BREAKPOINTS.lg}) {
    justify-content: flex-end;
  }
`;

const TotalText = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
  margin-left: 1rem;
`;

export const TotalCost = (props) => {
  return (
    <TotalWrapper>
      <div>
        <DetailsTitle> Total cost </DetailsTitle>
        <DetailsInfo> Delivery included </DetailsInfo>
      </div>

      <div>
        <TotalText>
          <CurrencyFormat value={props.total}
            displayType={'text'}
            thousandSeparator={true} prefix={'$'} />
        </TotalText>
      </div>
    </TotalWrapper>
  );
};

TotalCost.propTypes = {
  total: Number,
};
