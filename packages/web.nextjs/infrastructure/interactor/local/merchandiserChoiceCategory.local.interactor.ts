import { MerchandiserChoiceCategoryDTO } from '../../../application/dto/merchandiserChoiceCategory.dto';
import { MerchandiserChoiceCategoryLocalUsecase } from '../../../application/usecases/local/merchandiserChoiceCategory.local.usecase';

export class MerchandiserChoiceCategoryLocalInteractor {
  constructor(private readonly merchandiserChoiceCategoryLocalUsecase: MerchandiserChoiceCategoryLocalUsecase) {}

  hello(category?: MerchandiserChoiceCategoryDTO) {
    return this.merchandiserChoiceCategoryLocalUsecase.hello(category);
  }
}
