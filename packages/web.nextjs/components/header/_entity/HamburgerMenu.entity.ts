import { IHamburgerMenu } from '../../../types/menu/HamburgerMenu.interface';

export default class HamburgerMenuEntity {
  private readonly _entity: IHamburgerMenu[];

  get entity() {
    return this._entity;
  }

  constructor() {
    this._entity = [
      // {
      //   id: 1,
      //   image: {
      //     default: '/hamburger/a5tXHWOGWZXPvBA1KVTQpIjCGDYHOOPRVRJBail4.png',
      //     active: '/hamburger/a5tXHWOGWZXPvBA1KVTQpIjCGDYHOOPRVRJBail4.png',
      //   },
      //   url: '/categories/177',
      //   name: '2023 설 선물세트',
      // },
      {
        id: 2,
        image: {
          default: '/hamburger/4IYbd0CEWkokpqiN00CAL9cDC2Q7nT101TDEn0tF.png',
          active: '/hamburger/active/D2tq9D88GPQCRZd2FC04ct0BI0xId0Z1wTFWb7Wu.png',
        },
        url: '/categories/907',
        name: '채소',
        children: [
          {
            id: 1,
            url: '/categories/907/008',
            name: '친환경',
          },
          // ·
          {
            id: 2,
            url: '/categories/907/001',
            name: '감자·고구마·당근',
          },
          {
            id: 3,
            url: '/categories/907/002',
            name: '시금치·쌈채소·나물',
          },
          {
            id: 4,
            url: '/categories/907/003',
            name: '브로콜리·파프리카·양배추',
          },
          {
            id: 5,
            url: '/categories/907/005',
            name: '양파·대파·마늘·배추',
          },
          {
            id: 6,
            url: '/categories/907/004',
            name: '오이·호박·고추',
          },
          {
            id: 7,
            url: '/categories/907/007',
            name: '냉동·이색·간편채소',
          },
          {
            id: 8,
            url: '/categories/907/006',
            name: '콩나물·버섯',
          },
        ],
      },
      {
        id: 3,
        image: {
          default: '/hamburger/DNXCcUaXoXakDOdHiGhIMCNUeUjJioG9EyeQ7RRX.png',
          active: '/hamburger/active/EO7bBGPrhrByqlpJYMuIFOLWo0IiOMkgMYar4Tjv.png',
        },
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
        image: {
          default: '/hamburger/jj6zZg2sY94aytlc2k1udIAmWWvmUignR9VYaMcm.png',
          active: '/hamburger/active/EOMHR0scDTojmp9yxY6ZK6U01fkqUEg19nPMyQFG.png',
        },
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
        image: {
          default: '/hamburger/kwat5Szmq0ONTpMd4hlbcGmCOBd3FsMPyTzWxKBb.png',
          active: '/hamburger/active/LZjcLmIFN6IqVsraCsArIE2zPh3u2i7foirsWHQZ.png',
        },
        url: '/categories/912',
        name: '샐러드·간편식',
      },
      {
        id: 8,
        image: {
          default: '/hamburger/CL0LpJynh8Nh2Vqmnm62RVTPePWVU84VkWwQPjdO.png',
          active: '/hamburger/active/u9ClAhIMBYYrC3U9b3dvn9MEzqGPpL48E5fLldNv.png',
        },
        url: '/categories/913',
        name: '면·양념·오일',
      },
      {
        id: 9,
        image: {
          default: '/hamburger/bKllScRqF9gQ5q58LcmBfOOhgBrCOdVypPiRvQkL.png',
          active: '/hamburger/active/PsTvzGzTKzgmANHetZ1XDCBoIvHj874L9goGSKXx.png',
        },
        url: '/categories/914',
        name: '생수·음료·우유·커피',
      },
      {
        id: 10,
        image: {
          default: '/hamburger/5qKRHLtIeBWLxUPa1g3koUhqsAkc39YjtMnyIXCJ.png',
          active: '/hamburger/active/NQcAF49piGDLu6VFgONSsIHWF1xU01o95Azs7usZ.png',
        },
        url: '/categories/249',
        name: '간식·과자·떡',
      },
      // Index 6 to 10
      {
        id: 11,
        image: {
          default: '/hamburger/bIjVH9L4oDFYv0GpjBijA6QQEjiDOW0KoflLVNC1.png',
          active: '/hamburger/active/H4Ivs7jCWSuhqh7ru3NetkS6Hhof7pvq3tWbujBr.png',
        },
        url: '/categories/915',
        name: '베이커리·치즈·델리',
      },
      {
        id: 12,
        image: {
          default: '/hamburger/vEGBXqN7a2bxTC3v6jntEzTqQiwG4ogLkiruPwRs.png',
          active: '/hamburger/active/MFavdtAkcl2J3q5fiyKDYKBtKiu0D28z9fLd1JhN.png',
        },
        url: '/categories/032',
        name: '건강식품',
      },
      {
        id: 13,
        image: {
          default: '/hamburger/UnO3V0GDnss8p37EKmTGvnF9SzeyzgyzC0O7Wh1R.png',
          active: '/hamburger/active/xtK9aF5n9OfmNfWuLMmyHzxUaj7Y9pVx2MPetIex.png',
        },
        url: '/categories/722',
        name: '와인',
      },
      {
        id: 14,
        image: {
          default: '/hamburger/1vmSDtWcIbzUc8QNl8CV9EQ7h5dWGc4uMg4uY6cP.png',
          active: '/hamburger/active/AOjtb13dmWVXuWVXD3ciXj86bREiwbuZe7UMuORT.png',
        },
        url: '/categories/251',
        name: '전통주',
      },
      {
        id: 15,
        image: {
          default: '/hamburger/1vTroAoaidyGvcDf1MRU8GhS73GMp9oZ7lm7IT0Z.png',
          active: '/hamburger/active/Pswp08fDvUBYtFU4tOr0OPw96uvwEpfrHbLfQwhY.png',
        },
        url: '/categories/918',
        name: '생활용품·리빙·캠핑',
      },
      // Index 11 to 15
      {
        id: 16,
        image: {
          default: '/hamburger/3OUDPGzCOTPixqHY1wdFEUfHacXxynCpnlzFzFBD.png',
          active: '/hamburger/active/o2JUnyHF7RfALd4PF2hDWMeXsLwks8V0eOZxkKTz.png',
        },
        url: '/categories/233',
        name: '스킨케어·메이크업',
      },
      {
        id: 17,
        image: {
          default: '/hamburger/APNr2Xb1ZeF9WcBDky1V9GWHZaCy7kifCkwSjTjy.png',
          active: '/hamburger/active/iX5PzA1SIZQ5HtuzlxIHxwoEghZJPo52RjKTbkLe.png',
        },
        url: '/categories/012',
        name: '헤어·바디·구강',
      },
      {
        id: 18,
        image: {
          default: '/hamburger/K81cs1Af4uRkEvbnfEV51E5UcwP5v6HhH1xyFqHK.png',
          active: '/hamburger/active/mMvcBMHney2BoKcBu3rguBpJJ74I6B3vMd25WExM.png',
        },
        url: '/categories/916',
        name: '주방용품',
      },
      {
        id: 19,
        image: {
          default: '/hamburger/Keg4gCKfZBXhAB0xMtsFyWq7PEowD7IiZNZSCTEY.png',
          active: '/hamburger/active/AnLa9VI6lup6UFVkzjgoTZPPbDWDWRLKhbf3LN22.png',
        },
        url: '/categories/085',
        name: '가전제품',
      },
      {
        id: 20,
        image: {
          default: '/hamburger/DeT1R9JFqxgxubAIJuFcbZPPbBu8DHUkFJmGZBlJ.png',
          active: '/hamburger/active/V2MuWvX3LZ2COZf1Mmf50sTvvPzvxdrgp3blMCjI.png',
        },
        url: '/categories/991',
        name: '반려동물',
      },
      // Index 16 to 20
      {
        id: 21,
        image: {
          default: '/hamburger/0901lRbjcR35VHqUHPbKIZCAO9qPgi79RCqFymgp.png',
          active: '/hamburger/active/PPIhbxPYNSs9WkXDw4gEmet6A0biLQi2rYebJ7xw.png',
        },
        url: '/categories/919',
        name: '베이비·키즈·완구',
      },
      {
        id: 22,
        image: {
          default: '/hamburger/EwBAg7Qe8b0WeQnmI4b9eILq2v9HcwzRXVjXrHfK.png',
          active: '/hamburger/active/eTzLBaVJhs5u3U8nCnL1FuKKwxl8OiWccRU5rn4b.png',
        },
        url: '/categories/474',
        name: '여행·티켓',
      },
    ];
  }
}
