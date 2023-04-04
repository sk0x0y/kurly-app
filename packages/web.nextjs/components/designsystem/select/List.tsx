import { css } from '@emotion/react';
import { IProduct, ISubProduct } from '../../../infrastructure/interface/product.interface';

interface IProps {
  record?: IProduct;
  isExpanded: boolean;
  onClick: (subProduct: ISubProduct) => void;
}
function List(props: IProps) {
  const { record, isExpanded, onClick } = props;

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
      {record?.subProduct?.map(subProduct => (
        <li
          key={subProduct.id}
          onClick={() => {
            return onClick(subProduct);
          }}
          tabIndex={0}
          role="option"
          aria-selected={false}
          data-value={subProduct.id}
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
            {subProduct.name}
          </span>

          <span
            css={css`
              font-size: 12px;
              font-weight: 600;
            `}
          >
            {subProduct.price.original}원
          </span>
        </li>
      ))}
    </ul>
  );
}

export default List;
