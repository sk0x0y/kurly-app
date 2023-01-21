import { IHamburgerMenu } from '../../../types/menu/HamburgerMenu.interface';

export default class HamburgerMenuEntity {
  private readonly _entity: IHamburgerMenu[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      {
        id: 1,
        image: { default: '/hamburger/a5tXHWOGWZXPvBA1KVTQpIjCGDYHOOPRVRJBail4.png' },
        url: '/categories/177',
        name: '2023 설 선물세트',
      },
      {
        id: 2,
        image: { default: '/hamburger/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png' },
        url: '/categories/907',
        name: '채소',
      },
      {
        id: 3,
        image: { default: '/hamburger/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png' },
        url: '/categories/908',
        name: '과일·견과·쌀',
      },
      {
        id: 4,
        image: {
          default: '/hamburger/fivaoZPBTeqaDswJUgr3k0xMV0von36Qb9qnn7ZZ.png',
          active: '/hamburger/active/ZDTiP71KkstnCGkPmu67wHr0wcIo3QMLjyg2Kho3.png',
        },
        url: '/categories/909',
        name: '수산·해산·건어물',
      },
      {
        id: 5,
        image: { default: '/hamburger/jj6zZg2sY94aytlc2k1udIAmWWvmUignR9VYaMcm.png' },
        url: '/categories/910',
        name: '정육·계란',
      },
      // Index 1 to 5
      {
        id: 6,
        image: {
          default: '/hamburger/CkyoRnUe2q9ngIOLW3bJPRYBw9xq9BHZ3fNQIq1c.png',
          active: '/hamburger/active/TmOAqHrU3DaZ9GtkfircoZQmd0xGaplSNoXw2q8V.png',
        },
        url: '/categories/911',
        name: '국·반찬·메인요리',
      },
      {
        id: 7,
        image: { default: '/hamburger/kwat5Szmq0ONTpMd4hlbcGmCOBd3FsMPyTzWxKBb.png' },
        url: '/categories/912',
        name: '샐러드·간편식',
      },
      {
        id: 8,
        image: { default: '/hamburger/CL0LpJynh8Nh2Vqmnm62RVTPePWVU84VkWwQPjdO.png' },
        url: '/categories/913',
        name: '면·양념·오일',
      },
      {
        id: 9,
        image: { default: '/hamburger/bKllScRqF9gQ5q58LcmBfOOhgBrCOdVypPiRvQkL.png' },
        url: '/categories/914',
        name: '생수·음료·우유·커피',
      },
      {
        id: 10,
        image: { default: '/hamburger/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png' },
        url: '/categories/249',
        name: '간식·과자·떡',
      },
      // Index 6 to 10
      {
        id: 11,
        image: { default: '/hamburger/bIjVH9L4oDFYv0GpjBijA6QQEjiDOW0KoflLVNC1.png' },
        url: '/categories/915',
        name: '베이커리·치즈·델리',
      },
      {
        id: 12,
        image: { default: '/hamburger/vEGBXqN7a2bxTC3v6jntEzTqQiwG4ogLkiruPwRs.png' },
        url: '/categories/032',
        name: '건강식품',
      },
      {
        id: 13,
        image: { default: '/hamburger/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png' },
        url: '/categories/249',
        name: '간식·과자·떡',
      },
      {
        id: 14,
        image: { default: '/hamburger/UnO3V0GDnss8p37EKmTGvnF9SzeyzgyzC0O7Wh1R.png' },
        url: '/categories/722',
        name: '와인',
      },
      {
        id: 15,
        image: { default: '/hamburger/1vmSDtWcIbzUc8QNl8CV9EQ7h5dWGc4uMg4uY6cP.png' },
        url: '/categories/251',
        name: '전통주',
      },
      // Index 11 to 15
      {
        id: 16,
        image: { default: '/hamburger/1vTroAoaidyGvcDf1MRU8GhS73GMp9oZ7lm7IT0Z.png' },
        url: '/categories/918',
        name: '생활용품·리빙·캠핑',
      },
      {
        id: 17,
        image: { default: '/hamburger/3OUDPGzCOTPixqHY1wdFEUfHacXxynCpnlzFzFBD.png' },
        url: '/categories/233',
        name: '스킨케어·메이크업',
      },
      {
        id: 18,
        image: { default: '/hamburger/APNr2Xb1ZeF9WcBDky1V9GWHZaCy7kifCkwSjTjy.png' },
        url: '/categories/012',
        name: '헤어·바디·구강',
      },
      {
        id: 19,
        image: { default: '/hamburger/K81cs1Af4uRkEvbnfEV51E5UcwP5v6HhH1xyFqHK.png' },
        url: '/categories/916',
        name: '주방용품',
      },
      {
        id: 20,
        image: { default: '/hamburger/Keg4gCKfZBXhAB0xMtsFyWq7PEowD7IiZNZSCTEY.png' },
        url: '/categories/085',
        name: '가전제품',
      },
      // Index 16 to 20
      {
        id: 21,
        image: { default: '/hamburger/DeT1R9JFqxgxubAIJuFcbZPPbBu8DHUkFJmGZBlJ.png' },
        url: '/categories/991',
        name: '반려동물',
      },
      {
        id: 22,
        image: { default: '/hamburger/0901lRbjcR35VHqUHPbKIZCAO9qPgi79RCqFymgp.png' },
        url: '/categories/919',
        name: '베이비·키즈·완구',
      },
      {
        id: 23,
        image: { default: '/hamburger/EwBAg7Qe8b0WeQnmI4b9eILq2v9HcwzRXVjXrHfK.png' },
        url: '/categories/474',
        name: '여행·티켓',
      },
    ];
  }
}
