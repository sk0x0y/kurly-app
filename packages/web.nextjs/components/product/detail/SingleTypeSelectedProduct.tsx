import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../application/usecases/selectedProduct.usecase';
import { IDealProductData } from '../../../infrastructure/interface/product-detail.interface';
import SelectedItem from './SelectedItem';
import { RootState } from '../../../infrastructure/redux';

interface IProps {
  dealProducts?: IDealProductData[];
}
function SingleTypeSelectedProduct(props: IProps) {
  const { dealProducts } = props;

  const dispatch = useDispatch();
  const selectedProductEntity = useSelector((state: RootState) => state.selectedProductAdaptor.entity);

  useEffect(() => {
    dispatch(actions.removeAll());

    if (dealProducts) {
      dispatch(actions.select(dealProducts[0]));
    }
  }, [dealProducts, dispatch]);

  return <SelectedItem selectedProduct={selectedProductEntity} />;
}

export default SingleTypeSelectedProduct;
