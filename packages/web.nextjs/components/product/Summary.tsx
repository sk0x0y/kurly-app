import { css } from '@emotion/react';
import Typography from '../designsystem/typography';
import { IProductDetail } from '../../infrastructure/interface/product-detail.interface';

interface IProps {
  product: IProductDetail;
}
function Summary(props: IProps) {
  const { product } = props;

  return (
    <div>
      <Typography.Text
        type="p"
        styles={css`
          font-weight: 500;
          line-height: 1.36;
          letter-spacing: -0.5px;
          color: #999;
          margin-bottom: 6px;
        `}
      >
        {product?.deliveryTypeNames[0]}
      </Typography.Text>
      <Typography.Title
        level="h2"
        styles={css`
          font-size: 24px;
          line-height: 34px;
          letter-spacing: -0.5px;
        `}
      >
        {product.name}
      </Typography.Title>
      <Typography.Title
        level="h3"
        styles={css`
          padding-top: 5px;
          font-size: 14px;
          font-weight: 400;
          color: #b5b5b5;
          line-height: 19px;
          letter-spacing: -0.5px;
        `}
      >
        {product.shortDescription}
      </Typography.Title>
      <Typography.Title
        level="h4"
        styles={css`
          padding-top: 19px;
          line-height: 30px;
          letter-spacing: -0.5px;
        `}
      >
        <Typography.Text
          type="span"
          styles={css`
            padding-right: 4px;
            font-size: 28px;
          `}
        >
          {product.basePrice}
        </Typography.Text>
        <Typography.Text
          type="span"
          styles={css`
            position: relative;
            top: 3px;
            font-size: 18px;
            vertical-align: top;
          `}
        >
          원
        </Typography.Text>
      </Typography.Title>
      <Typography.Text
        type="p"
        styles={css`
          color: #5f0080;
          line-height: 19px;
          letter-spacing: -0.5px;
          margin-top: 14px;
        `}
      >
        로그인 후, 적립 혜택이 적용됩니다.
      </Typography.Text>
    </div>
  );
}

export default Summary;
