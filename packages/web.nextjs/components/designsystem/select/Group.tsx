import { css } from '@emotion/react';

interface IProps {
  isExpanded: boolean;
}
function Group(props: IProps) {
  const { isExpanded } = props;

  return (
    <ul
      css={css`
        display: ${isExpanded ? 'block' : 'none'};
        position: absolute;
        width: 100%;
        background-color: #fff;
        cursor: pointer;
      `}
    >
      <li
        css={css`
          display: inline-flex;
          justify-content: space-between;
          width: 100%;
          padding: 11.5px 16px;
          border-left: 1px solid rgb(221, 221, 221);
          border-right: 1px solid rgb(221, 221, 221);

          &:hover {
            background-color: #fafafa;
          }

          &:first-of-type {
            border-top: 0;
          }

          &:last-of-type {
            border-bottom: 1px solid rgb(221, 221, 221);
          }
        `}
        data-value={1}
      >
        <span
          css={css`
            font-size: 12px;
          `}
        >
          [멘베이] 명란 센베이 플레인
        </span>

        <span
          css={css`
            font-size: 12px;
            font-weight: 600;
          `}
        >
          12,500원
        </span>
      </li>
    </ul>
  );
}

export default Group;
