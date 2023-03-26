import { css } from '@emotion/react';
import Button from '../button';
import { IProductTab } from '../../../infrastructure/interface/productTab.interface';

interface IProps {
  tabs: IProductTab[];
}
function Tab(props: IProps) {
  const { tabs } = props;

  return (
    <ul
      css={css`
        display: flex;
        height: 60px;
      `}
    >
      {tabs.map(tab => (
        <li
          key={tab.id}
          css={css`
            flex-grow: 1;
            display: flex;
            justify-content: center;
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: #eee;
            background-color: #fafafa;

            &:last-of-type {
              border-right: 1px solid #eee;
            }
          `}
        >
          <Button.Base
            styles={css`
              width: 100%;
              font-size: 16px;
              font-weight: 500;
              color: #666;
            `}
          >
            {tab.name}
          </Button.Base>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
