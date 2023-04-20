import Link from 'next/link';
import { css } from '@emotion/react';
import { ISectionMeta } from '../../../infrastructure/interface/section.interface';
import { IKurlyCategoryPageMetaData } from '../../../infrastructure/interface/category.interface';

interface IProps {
  categoryId?: string;
  subCategoryId?: string;
  productMeta?: ISectionMeta;
  pageMeta?: {
    data: IKurlyCategoryPageMetaData;
    meta: ISectionMeta;
  };
}
function ItemSortTab(props: IProps) {
  const { categoryId, subCategoryId, productMeta, pageMeta } = props;

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
      `}
    >
      <div
        css={css`
          font-weight: 500;
        `}
      >
        총 {productMeta?.pagination?.total}건
      </div>

      <ul
        css={css`
          position: relative;
          display: flex;
          align-items: center;

          > li {
            display: flex;
            align-items: center;
            margin-left: 8px;

            > a {
              text-decoration: none;
              color: #999;
            }

            &:not(:first-of-type):before {
              content: '';
              display: flex;
              width: 1px;
              height: 10px;
              margin-right: 8px;
              background-color: rgb(226, 226, 226);
            }
          }
        `}
      >
        {pageMeta?.meta.available_sort?.map(item => {
          if (item.type === '4') {
            return (
              <li key={item.type}>
                <Link href={`${categoryId}?sort_type=${item.type}`}>추천순</Link>
                <div
                  css={css`
                    height: 20px;
                    margin-left: 5px;
                  `}
                >
                  <svg width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z"
                      stroke="#ccc"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z"
                      fill="#ccc"
                    />
                  </svg>

                  <div
                    css={css`
                      display: none;
                    `}
                  >
                    소비자 인기도(판매량, 판매금액, 조회수 등), 상품 출시일, 수요 적합성, 상품 운영상 필요 등을
                    종합적으로 고려한 순서입니다.
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={item.type}>
              <Link href={`${categoryId}?sort_type=${item.type}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemSortTab;
