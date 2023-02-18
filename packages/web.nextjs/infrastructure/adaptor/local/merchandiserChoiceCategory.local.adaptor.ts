import { MerchandiserChoiceCategoryLocalInteractor } from '../../interactor/local/merchandiserChoiceCategory.local.interactor';
import { MerchandiserChoiceCategoryLocalUsecase } from '../../../application/usecases/local/merchandiserChoiceCategory.local.usecase';

export const MerchandiserChoiceCategoryLocalAdaptor = {
  merchandiserChoiceCategoryLocalInteractor: new MerchandiserChoiceCategoryLocalInteractor(
    new MerchandiserChoiceCategoryLocalUsecase()
  ),
};
