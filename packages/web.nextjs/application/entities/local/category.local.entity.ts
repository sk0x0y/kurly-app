import { ICategory } from '../../../infrastructure/interface/category.interface';

export class CategoryLocalEntity {
  entity: ICategory[];

  constructor() {
    this.entity = [
      {
        id: 2,
        categoryId: 907,
        url: '/categories/907',
        name: '채소',
        count: { available: 3 },
        children: [
          {
            id: 1,
            subCategoryId: 8,
            url: '/categories/907/008',
            name: '친환경',
          },
          {
            id: 2,
            subCategoryId: 1,
            url: '/categories/907/001',
            name: '감자·고구마·당근',
          },
          {
            id: 3,
            subCategoryId: 2,
            url: '/categories/907/002',
            name: '시금치·쌈채소·나물',
          },
          {
            id: 4,
            subCategoryId: 3,
            url: '/categories/907/003',
            name: '브로콜리·파프리카·양배추',
          },
          {
            id: 5,
            subCategoryId: 5,
            url: '/categories/907/005',
            name: '양파·대파·마늘·배추',
          },
          {
            id: 6,
            subCategoryId: 4,
            url: '/categories/907/004',
            name: '오이·호박·고추',
          },
          {
            id: 7,
            subCategoryId: 7,
            url: '/categories/907/007',
            name: '냉동·이색·간편채소',
          },
          {
            id: 8,
            subCategoryId: 6,
            url: '/categories/907/006',
            name: '콩나물·버섯',
          },
        ],
      },
      {
        id: 3,
        categoryId: 908,
        url: '/categories/908',
        name: '과일·견과·쌀',
        count: { available: 12 },
      },
      {
        id: 4,
        categoryId: 909,
        url: '/categories/909',
        name: '수산·해산·건어물',
        count: { available: 9 },
      },
      {
        id: 5,
        categoryId: 910,
        url: '/categories/910',
        name: '정육·계란',
        count: { available: 4 },
      },
      // Index 1 to 5
      {
        id: 6,
        categoryId: 911,
        url: '/categories/911',
        name: '국·반찬·메인요리',
        count: { available: 11 },
      },
      {
        id: 7,
        categoryId: 912,
        url: '/categories/912',
        name: '샐러드·간편식',
        count: { available: 11 },
      },
      {
        id: 8,
        categoryId: 913,
        url: '/categories/913',
        name: '면·양념·오일',
        count: { available: 3 },
      },
      {
        id: 9,
        categoryId: 914,
        url: '/categories/914',
        name: '생수·음료·우유·커피',
        count: { available: 13 },
      },
      {
        id: 10,
        categoryId: 249,
        url: '/categories/249',
        name: '간식·과자·떡',
        count: { available: 16 },
      },
      // Index 6 to 10
      {
        id: 11,
        categoryId: 915,
        url: '/categories/915',
        name: '베이커리·치즈·델리',
        count: { available: 19 },
      },
      {
        id: 12,
        categoryId: 32,
        url: '/categories/032',
        name: '건강식품',
        count: { available: 2 },
      },
      {
        id: 13,
        categoryId: 722,
        url: '/categories/722',
        name: '와인',
        count: { available: 2 },
      },
      {
        id: 14,
        categoryId: 251,
        url: '/categories/251',
        name: '전통주',
        count: { available: 1 },
      },
      {
        id: 15,
        categoryId: 918,
        url: '/categories/918',
        name: '생활용품·리빙·캠핑',
        count: { available: 8 },
      },
      // Index 11 to 15
      {
        id: 16,
        categoryId: 233,
        url: '/categories/233',
        name: '스킨케어·메이크업',
        count: { available: 2 },
      },
      {
        id: 17,
        categoryId: 12,
        url: '/categories/012',
        name: '헤어·바디·구강',
        count: { available: 11 },
      },
      {
        id: 18,
        categoryId: 916,
        url: '/categories/916',
        name: '주방용품',
        count: { available: 2 },
      },
      {
        id: 19,
        categoryId: 85,
        url: '/categories/085',
        name: '가전제품',
        count: { available: 1 },
      },
      {
        id: 20,
        categoryId: 991,
        url: '/categories/991',
        name: '반려동물',
        count: { available: 1 },
      },
      // Index 16 to 20
      {
        id: 21,
        categoryId: 919,
        url: '/categories/919',
        name: '베이비·키즈·완구',
        count: { available: 2 },
      },
      {
        id: 22,
        categoryId: 474,
        url: '/categories/474',
        name: '여행·티켓',
        count: { available: 3 },
      },
    ];
  }
}
