import { CategoryLocalUsecase } from '../../../application/usecases/local/category.local.usecase';

import { CategoryDTO } from '../../../application/dto/category.dto';

export class CategoryLocalInteractor {
  constructor(private readonly categoryLocalUsecase: CategoryLocalUsecase) {}

  hello(category?: CategoryDTO) {
    return this.categoryLocalUsecase.hello(category);
  }
}
