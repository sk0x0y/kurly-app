import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import { SearchQuery } from '../infrastructure/interface/search.interface';
import Content from '../components/designsystem/content';
import ItemSortTab from '../components/designsystem/tab/ItemSortTab';
import Product from '../components/designsystem/product';
import Pagination from '../components/designsystem/pagination/Pagination';
import Kernel from '../components/designsystem/kernel';
import { useSearch } from '../hooks';

interface IProps {
  q: SearchQuery;
}
function Search(props: IProps) {
  const { q } = props;

  const { data } = useSearch(q);

  return (
    <Content.Section>
      <h3
        css={css`
          margin: 0;
          font-weight: 500;
          font-size: 28px;
          line-height: 35px;
          letter-spacing: -0.5px;
          text-align: center;
        `}
      >
        &lsquo;
        <span
          css={css`
            display: inline-block;
            overflow: hidden;
            max-width: 840px;
            color: rgb(95, 0, 128);
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: top;
          `}
        >
          {q}
        </span>
        &rsquo; 에 대한 검색결과
      </h3>

      {q && (
        <div
          css={css`
            display: flex;
            margin-top: 50px;
          `}
        >
          {/* 필터 및 초기화 */}
          {Boolean(data?.data.data.length) && (
            <Kernel.Product.FilterContainer>
              {/* 필터 아이템(항목) */}
              {data?.data.meta.filters &&
                data.data.meta.filters.map(filter => (
                  <Kernel.Product.FilterGroup key={filter.key} name={filter.name} entities={filter.values} expand />
                ))}
            </Kernel.Product.FilterContainer>
          )}

          {/* 정렬탭, 아이템(상품) 리스트, 페이지네이션 */}
          <div
            css={css`
              width: 100%;
            `}
          >
            {Boolean(data?.data.data.length) && <ItemSortTab productMeta={data?.data.meta} pageMeta={data?.data} />}

            <div
              css={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, 249px);
                gap: 31px 18px;
              `}
            >
              {data?.data.data &&
                data.data.data.map(product => (
                  <Product.Collection
                    key={product.no}
                    product={product}
                    options={{ imageSize: { width: 249, height: 320 } }}
                  />
                ))}
            </div>

            {Boolean(data?.data.data.length) && <Pagination />}
          </div>
        </div>
      )}

      {/* 검색 쿼리가 없는 경우 */}
      {(!q || !data?.data.data.length) && (
        <div
          css={css`
            font-size: 16px;
            color: rgb(181, 181, 181);
            text-align: center;
            padding: 222px 0 244px;

            &:before {
              content: '';
              display: block;
              width: 48px;
              height: 48px;
              margin: 0 auto 16px;
              background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0Q5RDlEOSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxwYXRoIGQ9Ik0zNy42MTMgMTkuMzEyYzAgNS43NjgtMi41MDggMTAuNzgzLTYuNTIgMTQuMDQ0LTMuMjYgMi43NTgtNy4yNzIgNC4yNjMtMTEuNzg2IDQuMjYzQzkuMDI1IDM3LjYxOSAxIDI5LjM0MyAxIDE5LjMxMiAxIDkuMDMgOS4yNzYgMS4wMDYgMTkuMzA3IDEuMDA2IDI5LjMzNy43NTUgMzcuNjEzIDkuMDMgMzcuNjEzIDE5LjMxMnpNNDYuMTM5IDQ2LjEzOSAzMi43MDQgMzIuNzA0Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=)
                50% 50% no-repeat;
            }
          `}
        >
          검색된 상품이 없습니다.
        </div>
      )}
    </Content.Section>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { q } = query;

  return {
    props: {
      q,
    },
  };
};
export default Search;
