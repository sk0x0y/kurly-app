import { css, SerializedStyles } from '@emotion/react';
import { IContent } from '../../../../../infrastructure/interface/product.interface';

interface IProps {
  content: IContent;
  styles?: SerializedStyles;
}
function Title(props: IProps) {
  const { content, styles } = props;

  return (
    <h3
      css={css`
        display: inline-block;
        position: relative;
        z-index: 10;
        font-size: 50px;
        width: 100%;
        margin-bottom: 70px;
        font-weight: 400;
        color: #666;

        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          top: 28px;
          width: 100%;
          height: 1px;
          background: #b9b9b9;
        }
      `}
    >
      <span
        css={[
          css`
            position: relative;
            z-index: 10;
            display: inline-block;
            padding: 0 15px;
            background: #fff;
            text-shadow: 2px 0px;
          `,
          styles,
        ]}
      >
        {content.title}
      </span>
    </h3>
  );
}

export default Title;
