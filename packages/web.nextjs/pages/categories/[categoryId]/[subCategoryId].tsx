import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Content from '../../../components/designsystem/content';
import Typography from '../../../components/designsystem/typography';
import Product from '../../../components/designsystem/product';
import Kernel from '../../../components/designsystem/kernel';
import Pagination from '../../../components/designsystem/pagination/Pagination';
import ItemSortTab from '../../../components/designsystem/tab/ItemSortTab';
import { RootState } from '../../../infrastructure/redux';

function SubCategoryId() {
  const router = useRouter();
  const categoryId = router.query.categoryId as string;
  const subCategoryId = router.query.subCategoryId as string;
  const categoryEntity = useSelector((state: RootState) => state.categoryAdaptor.entity);
  const productEntity = useSelector((state: RootState) => state.newProductAdaptor.entity);

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
        채소
      </Typography.Title>

      <div>
        <p>CategoryID: {categoryId}</p>
        <p>SubCategoryID: {subCategoryId}</p>
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
                color: inherit;
                letter-spacing: -1px;
                text-decoration: none;
                cursor: pointer;
              `}
            >
              전체보기
            </a>
          </Link>
        </li>

        {categoryEntity.map(category =>
          category.categoryId === Number(categoryId)
            ? category.children?.map(child => (
                <li key={child.id}>
                  <Link href={child.url ?? '/'} passHref>
                    <a
                      css={css`
                        font-weight: ${child?.subCategoryId === Number(subCategoryId) && 700};
                        color: ${child?.subCategoryId === Number(subCategoryId) ? 'rgb(95, 0, 128)' : 'inherit'};
                        letter-spacing: -1px;
                        text-decoration: none;
                        cursor: pointer;

                        &:hover {
                          font-weight: 700;
                          color: rgb(95, 0, 128);
                        }
                      `}
                    >
                      {child.name}
                    </a>
                  </Link>
                </li>
              ))
            : null
        )}
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
          <Kernel.Product.FilterGroup name="카테고리" entities={categoryEntity} expand />

          <Kernel.Product.FilterGroup name="브랜드" entities={categoryEntity} />

          <Kernel.Product.FilterGroup name="가격" entities={categoryEntity} />

          <Kernel.Product.FilterGroup name="혜택" entities={categoryEntity} />

          <Kernel.Product.FilterGroup name="유형" entities={categoryEntity} />
        </Kernel.Product.FilterContainer>

        {/* 정렬탭, 아이템(상품) 리스트, 페이지네이션 */}
        <div
          css={css`
            width: 100%;
          `}
        >
          <ItemSortTab />
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fill, 249px);
              gap: 31px 18px;
            `}
          >
            {productEntity.map(product => (
              <Product.Collection
                key={product.id}
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

export default SubCategoryId;
