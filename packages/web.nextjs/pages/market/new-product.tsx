import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Typography from '../../components/designsystem/typography';
import Product from '../../components/designsystem/product';
import Kernel from '../../components/designsystem/kernel';
import Pagination from '../../components/designsystem/pagination/Pagination';
import ItemSortTab from '../../components/designsystem/tab/ItemSortTab';
import { IKurlyProductData } from '../../infrastructure/interface/product.interface';
import { useCollectionFilter, useNewProduct } from '../../hooks';

function NewProduct() {
  const { data: products } = useNewProduct();
  const { data: filters } = useCollectionFilter('market-newproduct');

  // TODO: 추후 react-query 로 API Fetch 해서 Entity 에 Dispatch 해 줄 예정

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      <Product.CollectionBanner
        url="/categories/490"
        image={{ src: '/collection/banner/glVdP62yrvcvvzpsseGCDLUS3ErqbgPx8i8UGozE.png' }}
      />

      <Typography.Title
        level="h2"
        styles={css`
          font-size: 28px;
          text-align: center;
          letter-spacing: -1px;
        `}
      >
        신상품
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
          <ItemSortTab />
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

export default NewProduct;
