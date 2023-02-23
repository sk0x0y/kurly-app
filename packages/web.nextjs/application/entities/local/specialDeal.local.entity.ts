import { IProduct } from '../../../infrastructure/interface/product.interface';

export class SpecialDealLocalEntity {
  entity: IProduct[];

  constructor() {
    this.entity = [
      {
        id: 1,
        image: { src: '/goods/1653035652427l0.jpeg' },
        name: '존쿡 델리미트 바베큐 백립 450g (냉동)',
        price: { original: 16500, discount: { rate: 30, price: 11550 } },
      },
      {
        id: 2,
        image: { src: '/goods/1583294853283l0.jpg' },
        name: '[근대골목단팥빵] 단팥빵 (5개입)',
        price: { original: 10000, discount: { rate: 50, price: 5000 } },
      },
    ];
  }
}
