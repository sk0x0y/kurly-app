import { IProduct } from '../../../types/product/Product.interface';

export default class ProductEntity {
  private readonly _entity: IProduct[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      {
        id: 1,
        src: '/goods/165303896298l0.jpeg',
        name: '[외할머니댁] 감자탕',
        price: { original: 9000, discount: { rate: 5, price: 8550 } },
      },
      {
        id: 2,
        src: '/goods/1583294853283l0.jpg',
        name: '[근대골목단팥빵] 단팥빵 (5개입)',
        price: { original: 10000 },
      },
      {
        id: 3,
        src: '/goods/1647955357333l0.jpg',
        name: '[설치배송][LG전자] 코드제로 A9S 청소기 AT9200BA (본체:블랙, 올인원타워:딥그레이)',
        price: { original: 637900, discount: { rate: 9, price: 579900 } },
      },
      {
        id: 4,
        src: '/goods/1499675402657l0.jpg',
        name: '[한일관 X 백년가게] 등심 불고기',
        price: { original: 29900, discount: { rate: 15, price: 25415 } },
      },
      {
        id: 5,
        src: '/goods/1656987208633l0.jpg',
        name: '[곰표] 사워도우 통밀 크래커 4개입',
        price: { original: 9900 },
      },
      {
        id: 6,
        src: '/goods/1643190530517l0.jpg',
        name: '[풀무원] 크리스피 팝만두 고기듬뿍 405g x 2입',
        price: { original: 8980 },
      },
      { id: 7, src: '/goods/1657593530222l0.jpg', name: '[마마리] 트러플 바질페스토', price: { original: 14500 } },
      {
        id: 8,
        src: '/goods/1655799710227l0.jpg',
        name: '[상하목장] 유기농 요거트 플레인 저지방 400g',
        price: { original: 3400 },
      },
      { id: 9, src: '/goods/1628048570857l0.jpg', name: '[프릳츠] 콜드브루 300mL 2종', price: { original: 14000 } },
      {
        id: 10,
        src: '/goods/1640242719915l0.jpg',
        name: '[스키니피그] 서울숲 그린애플샤베트 아이스크림 (파인트)',
        price: { original: 7900, discount: { rate: 15, price: 6715 } },
      },
      {
        id: 11,
        src: '/goods/1637922344768l0.jpeg',
        name: '씻어나온 완전미 고시히카리 쌀 4kg',
        price: { original: 29000, discount: { rate: 15, price: 17750 } },
      },
      { id: 12, src: '/goods/163038728576l0.jpg', name: '[집국백서:가마솥 수제국] 추어탕', price: { original: 5700 } },
      {
        id: 13,
        src: '/goods/1644562932787l0.jpg',
        name: '[만토바] 엑스트라버진 올리브 오일 스프레이',
        price: { original: 9900, discount: { rate: 7, price: 9200 } },
      },
      { id: 14, src: '/goods/1651572461324l0.jpg', name: '[프로틴기프트] 아미노양갱', price: { original: 6480 } },
      {
        id: 15,
        src: '/goods/1650720468986l0.jpg',
        name: '[베비언스] BB핑크퐁 선쿠션 15g',
        price: { original: 19800, discount: { rate: 29, price: 13900 } },
      },
      { id: 16, src: '/goods/1552892853228l0.jpg', name: '[니신] 팬케익 믹스', price: { original: 8500 } },
      { id: 17, src: '/goods/1655704363603l0.jpg', name: '[YOZM] 플레인그릭요거트 450g', price: { original: 15000 } },
      {
        id: 18,
        src: '/goods/71e33806-f79b-4833-8933-6e4587a29a4f.jpg',
        name: '유기농 백미 4kg',
        price: { original: 21000, discount: { rate: 15, price: 17850 } },
      },
      { id: 19, src: '/goods/1582523311723l0.jpg', name: '[스마일찬] 진미채 양념볶음', price: { original: 3900 } },
      {
        id: 20,
        src: '/goods/1653377727820l0.jpg',
        name: "[kim's butcher] 냉동 돌돌말이 삼겹살 500g",
        price: { original: 8990 },
      },
    ];
  }
}
