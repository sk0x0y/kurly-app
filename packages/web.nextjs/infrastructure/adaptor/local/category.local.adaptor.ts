import { CategoryLocalInteractor } from '../../interactor/local/category.local.interactor';
import { CategoryLocalUsecase } from '../../../application/usecases/local/category.local.usecase';

export const CategoryLocalAdaptor = {
  categoryLocalInteractor: new CategoryLocalInteractor(new CategoryLocalUsecase()),
};
