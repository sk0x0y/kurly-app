import { css } from '@emotion/react';
import { IContent } from '../../../../../infrastructure/interface/product.interface';

interface IProps {
  content: IContent;
}
function Tip(props: IProps) {
  const { content } = props;

  return (
    <div
      css={css`
        margin-bottom: 170px;
      `}
    >
      <h3
        css={css`
          margin: 0;
          padding-left: 48px;
          font-weight: 500;
          font-size: 36px;
          color: #666;
          letter-spacing: 1px;
          text-shadow: 2px 0;
        `}
      >
        <span
          css={css`
            padding: 0 10px;
            background: #fff;
          `}
        >
          {content.title}
        </span>
      </h3>
      <div
        css={css`
          margin-top: -20px;
          border: 1px solid #b9b9b9;
        `}
      >
        <div
          css={css`
            margin: 60px 62px;
            font-size: 18px;
            line-height: 32px;
            color: #373737;
          `}
        >
          <h4
            css={css`
              margin: 0 0 10px 0;
              font-size: 25px;
              line-height: 38px;
            `}
          >
            {content.subTitle}
          </h4>

          <p>
            <b
              css={css`
                font-weight: 400;
              `}
            >
              ・
            </b>
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tip;
