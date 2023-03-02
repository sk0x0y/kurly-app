import { css } from '@emotion/react';

interface IProps {
  label: string;
  title: string;
  description?: string;
}
function InformationNoticeItem(props: IProps) {
  const { label, title, description } = props;

  return (
    <dl
      css={css`
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        margin: 0;
        padding: 17px 0 18px;
        border-top: 1px solid #f4f4f4;
        font-size: 14px;
        letter-spacing: -0.5px;
        overflow: hidden;
      `}
    >
      <dt
        css={css`
          width: 135px;
          height: 100%;
          color: #666;
          font-weight: 400;
          line-height: 19px;
        `}
      >
        {label}
      </dt>

      <dd
        css={css`
          display: flex;
          flex: 1;
          flex-direction: column;
          margin: 0;
        `}
      >
        <p
          css={css`
            color: #333;
            font-weight: 400;
            line-height: 19px;
            white-space: pre-line;
            word-break: break-all;
            overflow: hidden;
          `}
        >
          {title}
        </p>

        {description && (
          <p
            css={css`
              display: block;
              font-size: 12px;
              color: #666;
              padding-top: 4px;
              line-height: 16px;
              white-space: pre-line;
            `}
          >
            {description}
          </p>
        )}
      </dd>
    </dl>
  );
}

export default InformationNoticeItem;
