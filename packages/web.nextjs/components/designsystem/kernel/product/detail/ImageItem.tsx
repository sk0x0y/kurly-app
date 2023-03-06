import { css } from '@emotion/react';
import { Paragraph } from '../../../../../infrastructure/interface/product.interface';

interface IProps {
  p: Paragraph;
}
function ImageItem(props: IProps) {
  const { p } = props;

  return (
    <div
      css={css`
        margin-top: 55px;
        font-size: 18px;
        line-height: 32px;
        color: #373737;
      `}
    >
      <h4
        css={css`
          margin: 0 0 20px;
          font-weight: 500;
          font-size: 30px;
          line-height: 38px;
        `}
      >
        {p.title}
      </h4>

      <b>・중량&nbsp;:&nbsp;</b>
      {p.description?.weight}

      <br />

      <b>・특징&nbsp;:&nbsp;</b>
      {p.description?.characteristics}
    </div>
  );
}

export default ImageItem;
