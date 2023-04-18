import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import Button from '../../button';
import Kernel from '../index';
import ArrowUp from '../../icon/ArrowUp';
import { IFilterData } from '../../../../infrastructure/interface/filter.interface';

const UserInterfaceEnum = {
  CHECKBOX: 0, // NOTE: Input CheckBox
  SORTABLE_CHECKBOX: 1, // NOTE: Input CheckBox been sortable
  RADIO: 2, // NOTE: Input Radio
} as const;
interface IProps {
  name?: string;
  type?: typeof UserInterfaceEnum[keyof typeof UserInterfaceEnum];
  expand?: boolean;
  entities?: IFilterData[];
}
function FilterGroup(props: IProps) {
  const { name, expand, entities } = props;
  const [isExpanded, setIsExpended] = useState(false);

  useEffect(() => {
    return expand ? setIsExpended(true) : setIsExpended(false);
  }, [expand]);

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
          {name ?? <span>Please input name</span>}
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

      {entities && <Kernel.Product.FilterItem isExpanded={isExpanded} entities={entities} />}

      {!entities && (
        <span
          css={css`
            display: block;
            opacity: ${isExpanded ? 0 : 1};
            max-height: ${isExpanded ? 0 : '100vh'};
            transition: all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s;
            overflow: hidden;
          `}
        >
          Please input entities
        </span>
      )}
      {/* {isExpanded && (children ?? 'Not have children')} */}
    </div>
  );
}

export default FilterGroup;
