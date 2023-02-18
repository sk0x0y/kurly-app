import { CategoryDTO } from '../../dto/category.dto';
import { CategoryLocalEntity } from '../../entities/local/category.local.entity';

export class CategoryLocalUsecase {
  getEntity() {
    return new CategoryLocalEntity();
  }

  hello(category?: CategoryDTO) {
    const entity = new CategoryLocalEntity();

    console.log('CategoryLocalUsecase: ', entity);
  }
}
