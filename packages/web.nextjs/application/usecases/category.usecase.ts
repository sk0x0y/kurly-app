import { CategoryDTO } from '../dto/category.dto';
import { CategoryEntity } from '../entities/category.entity';

export class CategoryUsecase {
  hello(category?: CategoryDTO) {
    const categoryEntity = [];
    categoryEntity.push(
      new CategoryEntity(
        3,
        {
          default: '/hamburger/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png',
          active: '/hamburger/active/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png',
        },
        '/categories/908',
        '과일·견과·쌀'
      )
    );

    console.log('CategoryUsecase: ', categoryEntity);
  }

  local() {
    const categoryEntity = [];
    categoryEntity.push(
      new CategoryEntity(
        3,
        {
          default: '/hamburger/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png',
          active: '/hamburger/active/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png',
        },
        '/categories/908',
        '과일·견과·쌀'
      )
    );

    console.log('1 CategoryUsecase: ', categoryEntity);
  }
}
