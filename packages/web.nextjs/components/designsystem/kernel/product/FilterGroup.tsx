import React, { useState } from 'react';
import { css } from '@emotion/react';
import Button from '../../button';
import Kernel from '../index';
import ArrowUp from '../../icon/ArrowUp';

interface IProps {
  entities: any[];
}
function FilterGroup(props: IProps) {
  const { entities } = props;
  const [isExpanded, setIsExpended] = useState(false);

  return (
    <div
      css={css`
        border-bottom: 1px solid rgb(238, 238, 238);
      `}
    >
      <Button.Base
        onClick={() => {
          setIsExpended(!isExpanded);
        }}
        styles={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 52px;
        `}
      >
        <span
          css={css`
            font-weight: 500;
            font-size: 15px;
          `}
        >
          카테고리
        </span>

        <span
          css={css`
            width: 18px;
            height: 18px;
            transition: transform 250ms ease-out 0s;
            transform: ${isExpanded ? 'rotate(180deg)' : null};
          `}
        >
          <ArrowUp />
        </span>
      </Button.Base>

      <Kernel.Product.FilterItem isExpanded={isExpanded} entities={entities} />
      {/* {isExpanded && (children ?? 'Not have children')} */}
    </div>
  );
}

export default FilterGroup;
