import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Product from '../../components/designsystem/product';
import Kernel from '../../components/designsystem/kernel';
import Summary from '../../components/product/Summary';
import InformationNoticeItem from '../../components/product/InformationNoticeItem';
import SelectAndPutInCart from '../../components/product/SelectAndPutInCart';
import { getProductDetailContent } from '../../api';
import { IProductDetail } from '../../infrastructure/interface/product-detail.interface';
import SellerInformation from '../../components/product/detail/SellerInformation';
import ProductNoticeInformation from '../../components/product/detail/ProductNoticeInformation';
import WhyKurly from '../../components/product/detail/WhyKurly';

interface IProps {
  productDetail: IProductDetail;
}
function ProductId(props: IProps) {
  const { productDetail } = props;

  const [tabs] = useState([
    { id: 1, name: '상품설명' },
    { id: 2, name: '상세정보' },
    { id: 3, name: '후기' },
    { id: 4, name: '문의' },
  ]);

  // TODO: 첫 로딩 시 선택한 상품 엔티티 초기화

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
          <Image src={productDetail.mainImageUrl || '/dummy/430x552.png'} width={430} height={552} />
        </div>
        <div
          css={css`
            width: 560px;
          `}
        >
          {/* Summary Component */}
          <Summary product={productDetail} />

          {/* Product Information Notification Component */}
          <div
            css={css`
              margin-top: 20px;
            `}
          >
            {/* 배송 */}
            <InformationNoticeItem
              label="배송"
              title={productDetail.deliveryTypeNames[0]}
              description={`23시 전 주문 시 내일 아침 7시 전 도착
(대구·부산·울산 샛별배송 운영시간 별도 확인)`}
            />

            {/* 판매자 */}
            <InformationNoticeItem label="판매자" title={productDetail.sellerName} />

            {/* 포장타입 */}
            {/* 냉장 */}
            {productDetail.storageTypes[0] === 'COLD' && (
              <InformationNoticeItem
                label="포장타입"
                title="냉장 (종이포장)"
                description="택배배송은 에코 포장이 스티로폼으로 대체됩니다."
              />
            )}

            {/* 냉동 */}
            {productDetail.storageTypes[0] === 'FROZEN' && (
              <InformationNoticeItem
                label="포장타입"
                title="냉동"
                description="택배배송은 에코 포장이 스티로폼으로 대체됩니다."
              />
            )}

            {/* 상온 */}
            {productDetail.storageTypes[0] === 'AMBIENT_TEMPERATURE' && (
              <InformationNoticeItem
                label="포장타입"
                title="상온 (종이포장)"
                description="택배배송은 에코 포장이 스티로폼으로 대체됩니다."
              />
            )}

            {/* 판매단위 */}
            {productDetail.salesUnit && <InformationNoticeItem label="판매단위" title={productDetail.salesUnit} />}

            {/* 중량/용량 */}
            {productDetail.volume && <InformationNoticeItem label="중량/용량" title={productDetail.volume} />}

            {/* 원산지 */}
            {productDetail.productOrigin && (
              <InformationNoticeItem label="원산지" title={productDetail.productOrigin} />
            )}

            {/* A/S 안내 */}
            {productDetail.afterSaleServiceInfo && (
              <InformationNoticeItem label="A/S 안내" title={productDetail.afterSaleServiceInfo} />
            )}

            {/* 알레르기정보 */}
            {productDetail.allergy && <InformationNoticeItem label="알레르기정보" title={productDetail.allergy} />}

            {/* 유통기한(또는 소비기한)정보 */}
            {productDetail.expirationDate && (
              <InformationNoticeItem label="유통기한(또는 소비기한)정보" title={productDetail.expirationDate} />
            )}

            {/* 안내사항 */}
            {productDetail.guide && <InformationNoticeItem label="안내사항" title={productDetail.guide} />}

            {/* 상품 선택 및 장바구니 담기 - 구매 프로세스 */}
            {productDetail && <SelectAndPutInCart dealProduct={productDetail.dealProducts} />}
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
      <div dangerouslySetInnerHTML={{ __html: productDetail.productDetail.legacyContent }} />

      {/* 상품고시정보 */}
      <ProductNoticeInformation product={productDetail} />

      {/* 판매자 정보 */}
      <SellerInformation product={productDetail} />

      {/* Why Kurly */}
      <WhyKurly />

      {/* <div> */}
      {/*  /!* 인트로 이미지 & 설명 *!/ */}
      {/*  {record?.content?.intro && <Kernel.Product.Detail.Intro intro={record.content.intro} />} */}

      {/*  /!* Kurly's Check Point *!/ */}
      {/*  {record?.content?.checkpoint && ( */}
      {/*    <Kernel.Product.Detail.Content */}
      {/*      content={record.content.checkpoint} */}
      {/*      styles={{ */}
      {/*        title: css` */}
      {/*          margin-left: 290px; */}
      {/*        `, */}
      {/*      }} */}
      {/*    /> */}
      {/*  )} */}

      {/*  /!* Kurly's Pick *!/ */}
      {/*  {record?.content?.pick && ( */}
      {/*    <Kernel.Product.Detail.Content */}
      {/*      content={record.content.pick} */}
      {/*      styles={{ */}
      {/*        title: css` */}
      {/*          margin-left: 380px; */}
      {/*        `, */}
      {/*      }} */}
      {/*    /> */}
      {/*  )} */}

      {/*  /!* Kurly's Tip *!/ */}
      {/*  {record?.content?.tip && <Kernel.Product.Detail.Tip content={record.content.tip} />} */}

      {/*  /!* Kurly's Note *!/ */}
      {/*  {record?.content?.note && <Kernel.Product.Detail.Content content={record.content.note} />} */}

      {/*  /!* About Brand *!/ */}
      {/*  {record?.content?.about && ( */}
      {/*    <Kernel.Product.Detail.Content */}
      {/*      content={record.content.about} */}
      {/*      styles={{ */}
      {/*        title: css` */}
      {/*          margin-left: 370px; */}
      {/*        `, */}
      {/*      }} */}
      {/*    /> */}
      {/*  )} */}
      {/* </div> */}
    </Content.Section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const { data } = await getProductDetailContent(query.productId as string);

  // console.log('ssr', data.pageProps.product);

  return {
    props: {
      productDetail: data.pageProps.product,
    },
  };
}

export default ProductId;
