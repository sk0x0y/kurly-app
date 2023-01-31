import { ItemSortTabEntityInterface } from './ItemSortTabEntity.interface';

export default class ItemSortTabLocalEntity {
  private readonly _entity: ItemSortTabEntityInterface[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      { id: 1, name: '신상품순', url: '/market/new-product?sort=newest' },
      { id: 2, name: '판매량순', url: '/market/new-product?sort=order' },
      { id: 3, name: '혜택순', url: '/market/new-product?sort=benefit' },
      { id: 4, name: '낮은 가격순', url: '/market/new-product?sort=lowest' },
      { id: 5, name: '높은 가격순', url: '/market/new-product?sort=highest' },
    ];
  }
}
