import { CategoryUsecase } from '../../application/usecases/category.usecase';
import { CategoryDTO } from '../../application/dto/category.dto';

export class CategoryInteractor {
  constructor(private readonly categoryUsecase: CategoryUsecase) {}

  hello(category?: CategoryDTO) {
    return this.categoryUsecase.hello(category);
  }

  local() {
    return this.categoryUsecase.local();
  }
}
