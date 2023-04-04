import { css } from '@emotion/react';

interface IProps {
  name: string;
  value: number;
}
function CheckPriceItem(props: IProps) {
  const { name, value } = props;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;

        &:not(:first-of-type) {
          margin-top: 12px;
        }
      `}
    >
      <span
        css={css`
          font-size: 16px;
          line-height: 24px;
        `}
      >
        {name}
      </span>

      <span
        css={css`
          font-size: 18px;
          line-height: 24px;
        `}
      >
        {value}
        <span
          css={css`
            padding-left: 2px;
            font-size: 16px;
            vertical-align: bottom;
          `}
        >
          원
        </span>
      </span>
    </div>
  );
}

export default CheckPriceItem;
