import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Typography from '../../components/designsystem/typography';
import Product from '../../components/designsystem/product';
import Kernel from '../../components/designsystem/kernel';
import Pagination from '../../components/designsystem/pagination/Pagination';
import ItemSortTab from '../../components/designsystem/tab/ItemSortTab';
import { useCategory, useCategoryProduct, useCategoryProductFilter, useCategoryPageMeta } from '../../hooks';

interface IProps {
  categoryId: string;
}
function CategoryId(props: IProps) {
  const { categoryId } = props;

  const { data: categories } = useCategory(categoryId);
  const { data: filters } = useCategoryProductFilter(categoryId);
  const { data: products } = useCategoryProduct(categoryId);
  const { data: metadata } = useCategoryPageMeta(categoryId);

  // TODO: 추후 react-query 로 API Fetch 해서 Entity 에 Dispatch 해 줄 예정

  return (
    <Content.Section>
      <Typography.Title
        level="h2"
        styles={css`
          font-size: 28px;
          text-align: center;
          letter-spacing: -1px;
        `}
      >
        {metadata?.data.data.name}
      </Typography.Title>

      <div>
        <p>CategoryID: {categoryId}</p>
      </div>

      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 180px);
          gap: 16px 83px;
          overflow: hidden;
          margin-top: 28px;
          padding: 30px 40px;
          border: 1px solid rgb(226, 226, 226);
          line-height: 20px;
        `}
      >
        <li>
          <Link href={`/categories/${categoryId}`} passHref>
            <a
              css={css`
                font-weight: 700;
                color: rgb(95, 0, 128);
                letter-spacing: -1px;
                text-decoration: none;
                cursor: pointer;
              `}
            >
              전체보기
            </a>
          </Link>
        </li>

        {categories &&
          categories.data.data.map(category => (
            <li key={category.code}>
              <Link
                href={
                  category.code.length >= 4
                    ? `${category.code.slice(0, 3)}/${category.code.slice(3, category.code.length)}`
                    : category.code
                }
                passHref
              >
                <a
                  css={css`
                    color: inherit;
                    letter-spacing: -1px;
                    text-decoration: none;
                    cursor: pointer;

                    &:hover {
                      font-weight: 700;
                      color: rgb(95, 0, 128);
                    }
                  `}
                >
                  {category.name}
                </a>
              </Link>
            </li>
          ))}
      </ul>

      <div
        css={css`
          display: flex;
          margin-top: 50px;
        `}
      >
        {/* 필터 및 초기화 */}
        <Kernel.Product.FilterContainer>
          {/* 필터 아이템(항목) */}
          {filters &&
            filters.data.data.map(filter => (
              <Kernel.Product.FilterGroup key={filter.key} name={filter.name} entities={filter.values} expand />
            ))}
        </Kernel.Product.FilterContainer>

        {/* 정렬탭, 아이템(상품) 리스트, 페이지네이션 */}
        <div
          css={css`
            width: 100%;
          `}
        >
          <ItemSortTab categoryId={categoryId} productMeta={products?.data.meta} pageMeta={metadata?.data} />

          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, 249px);
              gap: 31px 18px;
            `}
          >
            {products &&
              products.data.data.map(product => (
                <Product.Collection
                  key={product.no}
                  product={product}
                  options={{ imageSize: { width: 249, height: 320 } }}
                />
              ))}
          </div>
          <Pagination />
        </div>
      </div>
    </Content.Section>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;
  const { categoryId } = query;

  return {
    props: {
      categoryId,
    },
  };
};
export default CategoryId;
