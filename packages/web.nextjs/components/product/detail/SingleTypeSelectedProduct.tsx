import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../application/usecases/selectedProduct.usecase';
import { IProductDetail } from '../../../infrastructure/interface/product-detail.interface';
import SelectedItem from './SelectedItem';
import { RootState } from '../../../infrastructure/redux';

interface IProps {
  productDetail: IProductDetail;
}
function SingleTypeSelectedProduct(props: IProps) {
  const { productDetail } = props;

  const dispatch = useDispatch();
  const selectedProductEntity = useSelector((state: RootState) => state.selectedProductAdaptor.entity);

  useEffect(() => {
    dispatch(actions.removeAll());
    dispatch(
      actions.select({
        entity: productDetail.dealProducts[0],
        masterName: productDetail.name,
        mainImageUrl: productDetail.mainImageUrl,
      })
    );
  }, [dispatch, productDetail.dealProducts, productDetail.mainImageUrl, productDetail.name]);

  return <SelectedItem selectedProduct={selectedProductEntity} />;
}

export default SingleTypeSelectedProduct;
