import { MerchandiserChoiceCategoryDTO } from '../../dto/merchandiserChoiceCategory.dto';
import { MerchandiserChoiceCategoryLocalEntity } from '../../entities/local/merchandiserChoiceCategory.local.entity';

export class MerchandiserChoiceCategoryLocalUsecase {
  getEntity() {
    return new MerchandiserChoiceCategoryLocalEntity();
  }

  hello(category?: MerchandiserChoiceCategoryDTO) {
    const entity = new MerchandiserChoiceCategoryLocalEntity();

    console.log('ProductLocalUsecase: ', entity);
  }
}
