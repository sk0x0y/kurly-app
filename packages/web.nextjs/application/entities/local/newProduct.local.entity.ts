import { DeliverType, IProduct } from '../../../infrastructure/interface/product.interface';

export class NewProductLocalEntity {
  entity: IProduct[];

  constructor() {
    this.entity = [
      {
        id: 1,
        image: { src: '/goods/new/737f1ad2-3d0f-42b5-900d-800f9d33390c.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[멘베이] 명란 센베이 3종 (택1)',
        description: '명란과 감자로 만든 특별한 센베이',
        price: { original: 12500 },
        notice: [
          {
            id: 1,
            label: '배송',
            title: '샛별배송',
            description: `23시 전 주문 시 내일 아침 7시 전 도착
              (대구·부산·울산 샛별배송 운영시간 별도 확인)`,
          },
          { id: 2, label: '판매자', title: '컬리' },
          {
            id: 3,
            label: '포장타입',
            title: '상온 (종이포장)',
            description: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
          },
          { id: 4, label: '판매단위', title: '1박스' },
          { id: 5, label: '중량/용량', title: '210g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
          {
            id: 7,
            label: '알레르기정보',
            title: `- 밀, 오징어, 대두 함유
- 새우, 계란, 게, 우유, 닭고기, 복숭아, 쇠고기, 고등어, 돼지고기 혼입가능`,
          },
          { id: 8, label: '유통기한(또는 소비기한)정보', title: '수령일 포함 최소 54일 남은 제품을 보내 드립니다' },
        ],
        review: { count: 37 },
      },
    ];
  }
}
