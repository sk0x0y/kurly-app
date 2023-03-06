// import { ProductDTO } from '../../dto/product.dto';
// import { ProductLocalEntity } from '../../entities/local/product.local.entity';
import { NewProductLocalEntity } from '../../entities/local/newProduct.local.entity';

export class ProductLocalUsecase {
  find(productId: number) {
    const { entity: entities } = new NewProductLocalEntity();
    const record = entities.filter(entity => entity.id === productId)[0];

    return record;
  }
}
