import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Product from '../../components/designsystem/product';
import Kernel from '../../components/designsystem/kernel';
import Summary from '../../components/product/Summary';
import InformationNoticeItem from '../../components/product/InformationNoticeItem';
import SelectAndPutInCart from '../../components/product/SelectAndPutInCart';
import { RootState } from '../../infrastructure/redux';

function ProductId() {
  const router = useRouter();
  const { query } = router;
  const [productId, setProductId] = useState<string>();
  const [tabs] = useState([
    { id: 1, name: '상품설명' },
    { id: 2, name: '상세정보' },
    { id: 3, name: '후기' },
    { id: 4, name: '문의' },
  ]);
  const productEntity = useSelector((state: RootState) => state.newProductAdaptor.entity);
  const record = productEntity.find(entity => entity.id === Number(productId));

  useEffect(() => {
    window.console.log(record);
  }, [record]);

  useEffect(() => {
    return setProductId(query.productId as string);
  }, [query]);

  return (
    <Content.Section
      styles={css`
        padding-top: 30px;
        padding-bottom: 0;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {/* Product Cover ImageContent */}
        <div>
          <Image src={record ? record.image.src : '/dummy/430x552.png'} width={430} height={552} />
        </div>
        <div
          css={css`
            width: 560px;
          `}
        >
          {/* Summary Component */}
          <Summary record={record} />

          {/* Product Information Notification Component */}
          <div
            css={css`
              margin-top: 20px;
            `}
          >
            {record && // NOTE: record && 해야 값을 기다림, 삼항도 가능.
              record.notice?.map(item => (
                <InformationNoticeItem
                  key={item.id}
                  label={item.label}
                  title={item.title}
                  description={item.description}
                />
              ))}

            {/* 상품 선택 및 장바구니 담기 - 구매 프로세스 */}
            <SelectAndPutInCart record={record} />
          </div>
        </div>
      </div>

      {/* Tab */}
      <div
        css={css`
          margin-top: 50px;
          margin-bottom: 40px;
        `}
      >
        <Product.Tab tabs={tabs} />
      </div>

      {/* 상품 설명 */}
      <div>
        {/* 인트로 이미지 & 설명 */}
        {record?.content?.intro && <Kernel.Product.Detail.Intro intro={record.content.intro} />}

        {/* Kurly's Check Point */}
        {record?.content?.checkpoint && (
          <Kernel.Product.Detail.Content
            content={record.content.checkpoint}
            styles={{
              title: css`
                margin-left: 290px;
              `,
            }}
          />
        )}

        {/* Kurly's Pick */}
        {record?.content?.pick && (
          <Kernel.Product.Detail.Content
            content={record.content.pick}
            styles={{
              title: css`
                margin-left: 380px;
              `,
            }}
          />
        )}

        {/* Kurly's Tip */}
        {record?.content?.tip && <Kernel.Product.Detail.Tip content={record.content.tip} />}

        {/* Kurly's Note */}
        {record?.content?.note && <Kernel.Product.Detail.Content content={record.content.note} />}

        {/* About Brand */}
        {record?.content?.about && (
          <Kernel.Product.Detail.Content
            content={record.content.about}
            styles={{
              title: css`
                margin-left: 370px;
              `,
            }}
          />
        )}
      </div>
    </Content.Section>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: { record: {} },
//   };
// }

export default ProductId;
