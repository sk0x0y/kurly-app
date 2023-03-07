import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Typography from '../../components/designsystem/typography';
import Product from '../../components/designsystem/product';
import Kernel from '../../components/designsystem/kernel';
import Pagination from '../../components/designsystem/pagination/Pagination';
import ItemSortTab from '../../components/designsystem/tab/ItemSortTab';
// eslint-disable-next-line no-unused-vars
import { useLocalCategoryEntity, useLocalNewProductEntity, useLocalProductEntity } from '../../infrastructure/zustand';

function Budget() {
  const categoryEntity = useLocalCategoryEntity();
  // const productEntity = useLocalProductEntity();
  const productEntity = useLocalNewProductEntity();

  // TODO: 추후 react-query 로 API Fetch 해서 Entity 에 Dispatch 해 줄 예정

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      <Product.CollectionBanner
        url="/categories/490"
        image={{ src: '/collection/banner/8VZCFUCCtBbOflZvly9F77qmdIeUikdrzGL4g1fO.png' }}
      />

      <Typography.Title
        level="h2"
        styles={css`
          font-size: 28px;
          text-align: center;
          letter-spacing: -1px;
        `}
      >
        알뜰쇼핑
      </Typography.Title>

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

export default Budget;
