import { ProductDTO } from '../../../application/dto/product.dto';
import { ProductLocalUsecase } from '../../../application/usecases/local/product.local.usecase';

export class ProductLocalInteractor {
  constructor(private readonly productLocalUsecase: ProductLocalUsecase) {}

  hello(category?: ProductDTO) {
    return this.productLocalUsecase.hello(category);
  }
}
