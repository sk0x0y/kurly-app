import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import Button from '../../designsystem/button';
import { RootState } from '../../../infrastructure/redux';
import { actions } from '../../../application/usecases/selectedProduct.usecase';
import { IProductDetail } from '../../../infrastructure/interface/product-detail.interface';
import SelectedItem from './SelectedItem';
import MultiTypeSelectedProductList from './MultiTypeSelectedProductList';

interface IProps {
  productDetail: IProductDetail;
}
function MultiTypeSelectedProductGroup(props: IProps) {
  const { productDetail } = props;

  const dispatch = useDispatch();
  const selectedProductEntity = useSelector((state: RootState) => state.selectedProductAdaptor.entity);

  useEffect(() => {
    dispatch(actions.removeAll());
  }, [dispatch]);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Button.Base
        onClick={() => {
          setIsExpanded(false);
        }}
        styles={css`
          position: ${isExpanded && 'fixed'};
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          cursor: initial;
        `}
        nomessage
      />
      <div
        css={css`
          position: relative;
        `}
      >
        <Button.Base
          onClick={() => setIsExpanded(!isExpanded)}
          styles={css`
            display: inline-flex;
            align-items: center;
            width: 100%;
            height: 40px;
            padding: 0 14px;
            border: 1px solid rgb(221, 221, 221);
            font-size: 12px;
            line-height: 1.4375em;
            letter-spacing: 0.00938em;
            cursor: pointer;
            user-select: none;
          `}
        >
          <p>상품을 선택해주세요</p>
          <i
            css={css`
              position: absolute;
              right: 10px;
              display: inline-block;
              width: 24px;
              height: 24px;
              background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiIC8+PC9zdmc+Cg==');
              transform: ${isExpanded && 'rotate(180deg)'};
            `}
          />
        </Button.Base>

        <MultiTypeSelectedProductList
          dealProduct={productDetail.dealProducts}
          isExpanded={isExpanded}
          onClick={deal => {
            setIsExpanded(false);
            dispatch(
              actions.select({ entity: deal, masterName: productDetail.name, mainImageUrl: productDetail.mainImageUrl })
            );
          }}
        />

        {/* 선택 된 리스트 아이템을 보여주는 컴포넌트 */}
        <SelectedItem selectedProduct={selectedProductEntity} contentType={productDetail.contentType} />
      </div>
    </>
  );
}

export default MultiTypeSelectedProductGroup;
