import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import Button from '../../designsystem/button';
import { ISelectedProduct } from '../../../infrastructure/interface/selectedProduct.interface';
import { actions } from '../../../application/usecases/selectedProduct.usecase';
import { ProductContentType } from '../../../infrastructure/interface/product-detail.interface';

interface IProps {
  selectedProduct: ISelectedProduct[];
  contentType?: ProductContentType;
}
function SelectedItem(props: IProps) {
  const dispatch = useDispatch();
  const { selectedProduct, contentType } = props;

  return (
    <ul
      css={css`
        margin-top: 6px;
      `}
    >
      {selectedProduct.map(selected => (
        <li
          key={selected.no}
          css={css`
            padding: 11px 10px 11px 15px;
            border: 1px solid #f4f4f4;
            font-size: 12px;

            &:not(:first-of-type) {
              border-top: 0;
            }
          `}
        >
          <div
            css={css`
              display: inline-flex;
              justify-content: space-between;
              width: 100%;
            `}
          >
            <span
              css={css`
                line-height: 16px;
              `}
            >
              {selected.name}
            </span>

            {/* 상품 선택 취소 */}
            {contentType === 'MULTI' && (
              <Button.Base
                onClick={() => {
                  dispatch(actions.remove(selected));
                }}
                styles={css`
                  width: 24px;
                  height: 24px;
                `}
              >
                <i
                  css={css`
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTAuOTEgMTAuOTEgMCAwIiBpZD0iMDMxNHo5c3Z0YSIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDEwLjkxIDEwLjkxIDAiIGlkPSJ6cjgxbTJkYXZiIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41NDUgNi41NDUpIj4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iLjU0NSIgeGxpbms6aHJlZj0iIzAzMTR6OXN2dGEiLz4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMS4wOTEiIHhsaW5rOmhyZWY9IiMwMzE0ejlzdnRhIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTQ1IDYuNTQ1KSI+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9Ii41NDUiIHhsaW5rOmhyZWY9IiN6cjgxbTJkYXZiIi8+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjEuMDkxIiB4bGluazpocmVmPSIjenI4MW0yZGF2YiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==);
                  `}
                />
              </Button.Base>
            )}
          </div>

          <div
            css={css`
              display: inline-flex;
              justify-content: space-between;
              width: 100%;
              margin-top: 12px;
            `}
          >
            <div
              css={css`
                display: inline-flex;
                width: 88px;
                border: 1px solid rgb(221, 223, 225);
                border-radius: 3px;
              `}
            >
              {/* 선택한 상품 감소 */}
              <Button.Base
                onClick={() => {
                  dispatch(actions.decrease(selected));
                }}
                styles={css`
                  width: 28px;
                  height: 28px;
                  background-size: cover;
                  background-color: transparent;
                  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
                `}
                nomessage
              />

              <span
                css={css`
                  font-size: 14px;
                  text-align: center;
                  width: 31px;
                  height: 28px;
                  line-height: 28px;
                `}
              >
                {selected.count}
              </span>

              {/* 선택한 상품 증가 */}
              <Button.Base
                onClick={() => {
                  dispatch(actions.increase(selected));
                }}
                styles={css`
                  width: 28px;
                  height: 28px;
                  background-size: cover;
                  background-color: transparent;
                  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
                `}
                nomessage
              />
            </div>

            <span
              css={css`
                font-weight: 600;
              `}
            >
              {selected.discountedPrice ? selected.discountedPrice : selected.basePrice} 원
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SelectedItem;
