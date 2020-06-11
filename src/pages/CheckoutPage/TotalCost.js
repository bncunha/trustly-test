import React from 'react';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const TotalText = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
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
