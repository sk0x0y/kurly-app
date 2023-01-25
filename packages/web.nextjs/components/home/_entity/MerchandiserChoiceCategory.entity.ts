import { IMerchandiserChoiceCategory } from '../../designsystem/product/MerchandiserChoiceCategory.interface';

export default class MerchandiserChoiceCategoryEntity {
  private readonly _entity: IMerchandiserChoiceCategory[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      {
        id: 1,
        categoryId: 907,
        name: '채소',
      },
      {
        id: 2,
        categoryId: 908,
        name: '과일·견과·쌀',
      },
      {
        id: 3,
        categoryId: 909,
        name: '수산·해산·건어물',
      },
      {
        id: 4,
        categoryId: 910,
        name: '정육·계란',
      },
      {
        id: 5,
        categoryId: 911,
        name: '국·반찬·메인요리',
      },
      {
        id: 6,
        categoryId: 912,
        name: '샐러드·간편식',
      },
      {
        id: 7,
        categoryId: 913,
        name: '면·양념·오일',
      },
      // 두번째줄
      {
        id: 8,
        categoryId: 914,
        name: '생수·음료·우유·커피',
      },
      {
        id: 9,
        categoryId: 249,
        name: '간식·과자·떡',
      },
      {
        id: 10,
        categoryId: 915,
        name: '베이커리·치즈·델리',
      },
      {
        id: 11,
        categoryId: 32,
        name: '건강식품',
      },
      {
        id: 12,
        categoryId: 722,
        name: '와인',
      },
      {
        id: 13,
        categoryId: 251,
        name: '전통주',
      },
      {
        id: 14,
        categoryId: 918,
        name: '생활용품·리빙·캠핑',
      },
      // 세번째줄
      {
        id: 15,
        categoryId: 233,
        name: '스킨케어·메이크업',
      },
      {
        id: 16,
        categoryId: 12,
        name: '헤어·바디·구강',
      },
      {
        id: 17,
        categoryId: 916,
        name: '주방용품',
      },
      {
        id: 18,
        categoryId: 85,
        name: '가전제품',
      },
      {
        id: 19,
        categoryId: 772,
        name: '선물하기',
      },
      {
        id: 20,
        categoryId: 991,
        name: '반려동물',
      },
      {
        id: 21,
        categoryId: 919,
        name: '베이비·키즈·완구',
      },
    ];
  }
}
