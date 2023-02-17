import { ProductLocalInteractor } from '../../interactor/local/product.local.interactor';
import { ProductLocalUsecase } from '../../../application/usecases/local/product.local.usecase';

export const ProductLocalAdaptor = {
  productLocalInteractor: new ProductLocalInteractor(new ProductLocalUsecase()),
};
