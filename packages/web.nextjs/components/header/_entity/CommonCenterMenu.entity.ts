import { ICommonCenterMenu } from '../../../types/menu/CommonCenterMenu.interface';

export default class CommonCenterMenuEntity {
  private readonly _entity: ICommonCenterMenu[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      { id: 1, name: '신상품', url: '/market/new-product' },
      { id: 2, name: '베스트', url: '/market/best' },
      { id: 3, name: '알뜰쇼핑', url: '/market/budget' },
      { id: 4, name: '특가/혜택', url: '/market/promotion' },
    ];
  }
}
