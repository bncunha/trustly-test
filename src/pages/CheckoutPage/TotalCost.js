import React from 'react';
import {DetailsTitle, DetailsInfo} from '../../styles/Tipografia';
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
import {BREAKPOINTS} from '../../styles/Variables';
import PropTypes from 'prop-types';

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @media(min-width: ${BREAKPOINTS.lg}) {
    ${(props) => props.alignLeft ? 'justify-content: flex-end' : '' };
  }
`;

const TotalText = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
  margin-left: 1rem;
`;

export const TotalCost = (props) => {
  const getHideClass = () => {
    let className = '';
    if (props.hideDesktop) {
      className += ' d-flex d-lg-none';
    } else if (props.hideMobile) {
      className += ' d-none d-lg-flex';
    }
    return className;
  };

  return (
    <TotalWrapper
      alignLeft={props.alignLeft}
      className={getHideClass()}
    >
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
  total: PropTypes.number,
  alignLeft: PropTypes.bool,
  hideDesktop: PropTypes.bool,
  hideMobile: PropTypes.bool,
};
