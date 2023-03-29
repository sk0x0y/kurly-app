import { DeliverType, IProduct } from '../../../infrastructure/interface/product.interface';

export class NewProductLocalEntity {
  entity: IProduct[];

  constructor() {
    this.entity = [
      // Divider
      {
        id: 1,
        image: { src: '/goods/new/737f1ad2-3d0f-42b5-900d-800f9d33390c.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[멘베이] 명란 센베이 3종 (택1)',
        description: '명란과 감자로 만든 특별한 센베이',
        price: { original: 12500 },
        subProduct: [
          { id: 1, name: '[멘베이] 명란 센베이 플레인', price: { original: 12500 } },
          { id: 2, name: '[멘베이] 명란 센베이 어니언', price: { original: 12500 } },
          { id: 3, name: '[멘베이] 명란 센베이 보니토 (가쓰오부시)', price: { original: 12500 } },
          { id: 4, name: '[멘베이] 명란 센베이 핫 앤 스파이시', price: { original: 12500 } },
        ],
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
        content: {
          intro: {
            title: '[멘베이] 명란 센베이 4종',
            subTitle: '명란과 감자로 만든 특별한 센베이',
            image: { src: '/goods/detail/gv40000486162_1.jpg' },
            description:
              "'멘베이'는 명란을 뜻하는 ‘멘타이코’와 ‘센베이’를 합친 말이에요. 후쿠오카에서 시작된 멘베이는 일본을 여행하는 사람이라면 꼭 사 와야 할 기념품으로 유명한데요. 감자의 담백한 풍미 사이로 느껴지는 명란의 짭조름한 감칠맛이 매력적인 과자랍니다. 센베이답게 바삭한 식감은 말할 것도 없고요. 누구나 부담 없이 즐기기 좋은 플레인부터 다양한 시즈닝으로 풍미를 더한 어니언, 보니토, 매운 맛까지 다양하게 준비했으니 취향에 따라 선택해 보세요. 가벼운 선물로도 추천해 드릴게요.",
          },
          checkpoint: {
            title: "Kurly's Check Point",
            image: [{ id: 1, src: '/goods/detail/gv30000486163_1.jpg' }],
          },
          pick: {
            title: 'Kurly’s Pick',
            image: [
              {
                id: 1,
                src: '/goods/detail/gv40000486165_1.jpg',
                height: 675,
                paragraph: [
                  {
                    id: 1,
                    title: '01. 명란 센베이 플레인',
                    description: {
                      weight: '박스(210g / 16개입)',
                      characteristics:
                        '명란의 짭조름한 감칠맛이 잘 살아있는 센베이입니다. 오랫동안 꾸준히 사랑받아온 스테디셀러예요.',
                    },
                  },
                  {
                    id: 2,
                    title: '02. 명란 센베이 어니언',
                    description: {
                      weight: '박스(210g / 16개입)',
                      characteristics: '볶은 양파의 단맛을 더한 명란 센베이입니다.',
                    },
                  },
                ],
              },
              {
                id: 2,
                src: '/goods/detail/gv40000486169_1.jpg',
                height: 675,
                paragraph: [
                  {
                    id: 1,
                    title: '03. 명란 센베이 보니토 (가쓰오부시)',
                    description: {
                      weight: '박스(210g / 16개입)',
                      characteristics: '건조 가다랑어로 해산물의 풍미를 더한 명란 센베이입니다.',
                    },
                  },
                  {
                    id: 2,
                    title: '04. 명란 센베이 핫 앤 스파이시',
                    description: {
                      weight: '박스(210g / 16개입)',
                      characteristics: '매콤한 감칠맛이 매력적인 명란 센베이입니다.',
                    },
                  },
                ],
              },
            ],
          },
          tip: {
            title: 'Kurly’s Tip',
            subTitle: '보관법',
            description: '직사광선을 피해 건조하고 서늘한 곳에 보관해 주세요.',
          },
          note: { title: 'Kurly’s Note', image: [{ id: 1, src: '/goods/detail/gv00000486174_1.jpg', height: 231 }] },
          about: {
            title: 'About Brand',
            image: [
              {
                id: 1,
                src: '/goods/detail/gv10000486175_1.jpg',
                height: 66,
                paragraph: [
                  {
                    id: 1,
                    text: '멘베이는 후쿠오카에서 문을 연 명란 센베이 전문점입니다. 명란젓은 후쿠오카의 대표 특산품 중 하나인데요. 멘베이에서는 명란젓과 감자로 만든 센베이를 선보여 많은 사랑을 받아왔어요. 후쿠오카를 여행하는 사람에게는 꼭 사 와야 할 기념품이기도 하죠. 담백한 감자와 짭조름한 명란의 조화로 폭발적인 인기를 얻은 멘베이는 이제 후쿠오카를 넘어 일본 전역에서 사랑받고 있습니다. 후쿠오카의 명물을 컬리에서 만나 보세요.',
                  },
                ],
              },
              { id: 2, src: '/goods/detail/gv20000486172_1.jpg', height: 4906 },
            ],
          },
        },
        review: { count: 37 },
      },
      {
        id: 2,
        image: { src: '/goods/new/74c2dc35-e415-44f4-94e3-4ef5cc2c9898.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[하코야] 차슈 슬라이스 210g',
        description: '한 점 한 점 감칠맛이 깃든',
        price: { original: 9900, discount: { rate: 15, price: 8415 } },
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
            title: '냉동 (종이포장)',
            description: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
          },
          { id: 4, label: '판매단위', title: '1팩' },
          { id: 5, label: '중량/용량', title: '210g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
          {
            id: 7,
            label: '알레르기정보',
            title: `- 돼지고기, 쇠고기, 닭고기, 대두, 밀, 토마토, 조개류(굴 포함) 함유
- 알류, 우유, 메밀, 땅콩, 고등어, 게, 새우, 복숭아, 이산화황, 호두, 오징어, 조개류(전복, 홍합 포함), 잣과 같은 시설에서 제조`,
          },
        ],
        review: { count: 11 },
      },
      {
        id: 3,
        image: { src: '/goods/new/9335998e-016d-44a0-8faa-1ac6e7ae0f7e.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[니혼모찌] 키리모찌 싱글팩 1kg',
        description: '짱구가 구워 먹던 쫀득한 떡',
        price: { original: 10900 },
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
          { id: 4, label: '판매단위', title: '1팩' },
          { id: 5, label: '중량/용량', title: '1kg' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
        ],
        review: { count: 12 },
      },
      // Divider
      {
        id: 4,
        image: { src: '/goods/new/043e819a-3fc5-4343-aad4-8c77550363bd.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[르 아뜰리에] 게랑드 토판 천일염 고운소금',
        description: '자연이 선물한 소금의 꽃',
        price: { original: 5980 },
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
          { id: 4, label: '판매단위', title: '1개' },
          { id: 5, label: '중량/용량', title: '150g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
        ],
      },
      {
        id: 5,
        image: { src: '/goods/new/f7f0853f-574b-4386-a9b7-f317b67ba1ba.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[코타니] 페르시안 소금 그라인더',
        description: '강렬하지만 깔끔한 뒷맛',
        price: { original: 6380 },
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
          { id: 4, label: '판매단위', title: '1개' },
          { id: 5, label: '중량/용량', title: '84g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
        ],
      },
      {
        id: 6,
        image: { src: '/goods/new/7391dc25-cf37-4514-a648-d1aca4fed29a.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[코타니] 할라페뇨 칠리 그라인더',
        description: '간편히 더하는 개운한 맛',
        price: { original: 13980 },
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
          { id: 4, label: '판매단위', title: '1개' },
          { id: 5, label: '중량/용량', title: '24g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
        ],
      },
      // Divider
      {
        id: 7,
        image: { src: '/goods/new/1642744287653l0.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[모현상회] 하프 칵테일새우 쉬림프링 (냉동)',
        description: '남길 걱정을 덜어줄 자숙 새우',
        price: { original: 10900 },
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
            title: '냉동 (종이포장)',
            description: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
          },
          { id: 4, label: '판매단위', title: '1팩' },
          { id: 5, label: '중량/용량', title: '새우170g + 소스 80g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
          {
            id: 7,
            label: '알레르기정보',
            title: `- 새우 함유`,
          },
          {
            id: 8,
            label: '유통기한(또는 소비기한)정보',
            title: '수령일 포함 최소 365일 남은 제품을 보내 드립니다 (총 유통기한 730일)',
          },
        ],
        review: { count: 142 },
      },
      {
        id: 8,
        image: { src: '/goods/new/cba94846-ebfc-4735-8568-426ee0e7f6ad.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[비움반찬] 파래무침',
        description: '새콤달콤 입맛 돋우는 반찬',
        price: { original: 2980 },
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
            title: '냉장 (종이포장)',
            description: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
          },
          { id: 4, label: '판매단위', title: '1팩' },
          { id: 5, label: '중량/용량', title: '180g' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
          {
            id: 7,
            label: '알레르기정보',
            title: `- 대두, 밀 함유
- 알류, 우유, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토맘토, 아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.`,
          },
        ],
        review: { count: 14 },
      },
      {
        id: 9,
        image: { src: '/goods/new/b4edb4f1-4367-482f-b578-67b4fef28d34.jpg' },
        deliver: { type: DeliverType.FAST },
        name: '[비움반찬] 도시락 밑반찬 세트 5종(택1)',
        description: '최고의 궁합으로 구성한',
        price: { original: 9900, discount: { rate: 5, price: 9405 } },
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
            title: '냉장 (종이포장)',
            description: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
          },
          { id: 4, label: '판매단위', title: '1묶음(3팩)' },
          { id: 5, label: '중량/용량', title: '옵션 별 상이' },
          { id: 6, label: '원산지', title: '상품설명/상세정보 참조' },
          {
            id: 7,
            label: '알레르기정보',
            title: `A세트
- 계란말이 : 계란, 대두 함유 / 우유, 메밀, 땅콩, 밀, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.
- 간장어묵볶음 : 대두, 밀 함유 / 알류, 우유, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.
- 무말랭이고춧잎 : 대두, 밀, 새우, 아황산류 함유 / 알류, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 복숭아, 토마토, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.
B세트
- 진미채볶음 : 밀, 대두, 계란, 쇠고기, 오징어 함유
- 메추리알조림 : 알류, 대두, 밀 함유 / 우유, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.
- 매콤어묵볶음 : 계란, 우유, 대두, 밀, 돼지고기, 닭고기, 쇠고기, 아황산류, 조개류(굴) 함유 / 메밀, 땅콩, 고등어, 게, 새우, 복숭아, 토마토, 호두, 오징어, 조개류(전복, 홍합 포함), 잣을 사용한 제품과 같은 제조시설에서 제조.
C 세트
- 햄감자채볶음 : 밀, 대두, 돼지고기, 닭고기, 우유 함유
- 묵은지들기름볶음 : 대두 함유
- 미역줄기볶음 : 대두, 닭고기 / 알류, 우유, 메밀, 땅콩, 밀, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 쇠고기, 오징어, 조개류(굴, 전복, 홍합 포함), 잣을 사용한 제품과 같은 제조 시설에서 제조.`,
          },
          { id: 8, label: '유통기한(또는 소비기한)정보', title: '수령일 포함 3일 남은 제품을 보내 드립니다' },
        ],
      },
    ];
  }
}
