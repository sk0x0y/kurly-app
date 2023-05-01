import { css } from '@emotion/react';
import { ISubProduct } from '../../../infrastructure/interface/product.interface';
import { IDealProductData } from '../../../infrastructure/interface/product-detail.interface';

interface IProps {
  dealProduct?: IDealProductData[];
  isExpanded: boolean;
  onClick: (dealProduct: IDealProductData) => void;
}
function List(props: IProps) {
  const { dealProduct, isExpanded, onClick } = props;

  return (
    <ul
      tabIndex={-1}
      role="listbox"
      css={css`
        display: ${isExpanded ? 'block' : 'none'};
        position: absolute;
        width: 100%;
        background-color: #fff;
        cursor: pointer;
      `}
    >
      {dealProduct?.map(deal => (
        <li
          key={deal.no}
          onClick={() => {
            return onClick(deal);
          }}
          tabIndex={0}
          role="option"
          aria-selected={false}
          data-value={deal.no}
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
        >
          <span
            css={css`
              font-size: 12px;
            `}
          >
            {deal.name}
          </span>

          <span
            css={css`
              font-size: 12px;
              font-weight: 600;
            `}
          >
            {deal.basePrice}원
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
