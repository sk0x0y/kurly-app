import { ProductDTO } from '../../dto/product.dto';
import { ProductLocalEntity } from '../../entities/local/product.local.entity';

export class ProductLocalUsecase {
  getEntity() {
    return new ProductLocalEntity();
  }

  hello(category?: ProductDTO) {
    const entity = new ProductLocalEntity();

    console.log('ProductLocalUsecase: ', entity);
  }
}
