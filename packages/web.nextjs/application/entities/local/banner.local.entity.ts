import { IBanner } from '../../../infrastructure/interface/banner.interface';

export class BannerLocalEntity {
  entity: IBanner[];

  constructor() {
    this.entity = [
      // 1 to 5
      {
        id: 1,
        url: '/categories/999',
        image: { src: '/banner/promotion/03ef5371-ad36-4859-8b91-261b84f33903.jpg', size: { height: 200 } },
      },
      { id: 2, image: { src: '/banner/promotion/caa033a0-3710-4c17-97bb-652e80c55c25.jpg', size: { height: 200 } } },
      { id: 3, image: { src: '/banner/promotion/cbe5eaa9-c1a9-4396-9faa-09c868760572.jpg', size: { height: 200 } } },
      { id: 4, image: { src: '/banner/promotion/b982ee5a-7e2b-45be-824c-cfa49f6d65bd.jpg', size: { height: 200 } } },
      { id: 5, image: { src: '/banner/promotion/ebf46e85-a38f-4d94-9ee7-f4e3cdcb2532.jpg', size: { height: 200 } } },
      // 6 to 10
      { id: 6, image: { src: '/banner/promotion/facd98d3-54ce-4497-a64d-2403581e2903.jpg', size: { height: 200 } } },
      { id: 7, image: { src: '/banner/promotion/a8ccf2b8-0834-4691-8c60-24a4909537fb.jpg', size: { height: 200 } } },
      { id: 8, image: { src: '/banner/promotion/4093c500-473f-4625-b4ba-2fe4fa2d1d68.jpg', size: { height: 200 } } },
      { id: 9, image: { src: '/banner/promotion/92aa007b-cba4-4362-95a7-93c9acd076f1.jpg', size: { height: 200 } } },
      { id: 10, image: { src: '/banner/promotion/751b0278-5d7b-49de-a7e2-cc50c02378ea.jpg', size: { height: 200 } } },
      // 11 to 15
      { id: 11, image: { src: '/banner/promotion/4def5796-0b38-4f8c-ae0f-e87d9e25d51b.jpg', size: { height: 200 } } },
      { id: 12, image: { src: '/banner/promotion/0c4a1e7a-1e48-4e9e-8223-4d6fb7ef4f81.jpg', size: { height: 200 } } },
      { id: 13, image: { src: '/banner/promotion/ff5f3ed2-7fad-4a21-a3f2-a120cf263d59.jpg', size: { height: 200 } } },
      { id: 14, image: { src: '/banner/promotion/e9c0f919-f6d1-402c-b340-ff0e20fce41b.jpg', size: { height: 200 } } },
      { id: 15, image: { src: '/banner/promotion/bcc5b386-0e69-417f-92d4-46365bd4c4df.jpg', size: { height: 200 } } },
      // 16 to 20
      { id: 16, image: { src: '/banner/promotion/d6f12d87-5700-44ec-b20a-c9ab2700f169.jpg', size: { height: 200 } } },
      { id: 17, image: { src: '/banner/promotion/d9546b7c-78e8-4968-9684-7cf63d3b729e.jpg', size: { height: 200 } } },
      { id: 18, image: { src: '/banner/promotion/58e5a67d-09b1-43f9-938f-e2be4173e59c.jpg', size: { height: 200 } } },
      { id: 19, image: { src: '/banner/promotion/9c3f273a-e701-4ee2-8596-1e08744faef2.jpg', size: { height: 200 } } },
      { id: 20, image: { src: '/banner/promotion/ac462cfc-0527-4d11-b217-369e59ea8f67.jpg', size: { height: 200 } } },
      // 21 to 25
      { id: 21, image: { src: '/banner/promotion/cdb26bb0-1680-4f84-95a8-21f055390ace.jpg', size: { height: 200 } } },
      { id: 22, image: { src: '/banner/promotion/9ddd3ca2-f404-4b0a-b6e1-0ab798193d02.jpg', size: { height: 200 } } },
      { id: 23, image: { src: '/banner/promotion/48fcc636-4d3f-47e2-bab3-7562e3f7a8db.jpg', size: { height: 200 } } },
      { id: 24, image: { src: '/banner/promotion/bb4e1da8-8d35-4372-a9dc-806857f879f7.jpg', size: { height: 200 } } },
      { id: 25, image: { src: '/banner/promotion/7d114d43-e1f4-4c14-b0a3-b89a0ec8f3e2.jpg', size: { height: 200 } } },
      // 26 to 30
      { id: 26, image: { src: '/banner/promotion/568a377c-d428-4573-9b66-d7df42e10c52.jpg', size: { height: 200 } } },
      { id: 27, image: { src: '/banner/promotion/226eb842-a0f9-46c2-84c4-bdbaa252daf8.jpg', size: { height: 200 } } },
      { id: 28, image: { src: '/banner/promotion/0b100df8-40c6-4c3a-8f2b-e5cb921f6bfe.jpg', size: { height: 200 } } },
      { id: 29, image: { src: '/banner/promotion/4375c74f-6a3b-450b-b004-96d3b1995bc1.jpg', size: { height: 200 } } },
      { id: 30, image: { src: '/banner/promotion/b8a5dcbf-f79b-427d-ab7f-c282d25b1399.jpg', size: { height: 200 } } },
      // 31 to 35
      { id: 31, image: { src: '/banner/promotion/fb13a851-116f-424b-8099-a9ca9791d4b2.jpg', size: { height: 200 } } },
      { id: 32, image: { src: '/banner/promotion/f50c65b6-6edb-48ae-8ad0-f0569852ee07.jpg', size: { height: 200 } } },
      { id: 33, image: { src: '/banner/promotion/141d80a9-49e3-4609-8750-f057a62f0511.jpg', size: { height: 200 } } },
      { id: 34, image: { src: '/banner/promotion/a95a0b9b-4e03-4d59-bdc1-f6d600d9df50.jpg', size: { height: 200 } } },
      { id: 35, image: { src: '/banner/promotion/c4438e48-7e9f-4adc-ba61-425cefa218a7.jpg', size: { height: 200 } } },
      // 36 to 40
      { id: 36, image: { src: '/banner/promotion/8fe08b35-4eb5-4fd6-986d-67c36d17badc.jpg', size: { height: 200 } } },
      { id: 37, image: { src: '/banner/promotion/a95d39ae-7049-4891-b90b-9e4f5cc6824e.jpg', size: { height: 200 } } },
      { id: 38, image: { src: '/banner/promotion/f9684268-54c2-4a7f-9094-4ebb192e8fca.jpg', size: { height: 200 } } },
      { id: 39, image: { src: '/banner/promotion/d4971105-9153-48e3-bdcd-8d8d1738f814.png', size: { height: 200 } } },
      { id: 40, image: { src: '/banner/promotion/d501a9e1-0927-41bb-8e03-d1e5b712211b.png', size: { height: 200 } } },
      // 41 to 45
      { id: 41, image: { src: '/banner/promotion/ae217d65-e3c1-4a1f-9fb7-0f12375b64cf.png', size: { height: 200 } } },
      { id: 42, image: { src: '/banner/promotion/80b00ad6-ac3a-4005-b023-645fca0620ec.jpg', size: { height: 200 } } },
      { id: 43, image: { src: '/banner/promotion/c0cda579-3dd9-4a4e-8bce-a2b7d552e7c7.jpg', size: { height: 200 } } },
      { id: 44, image: { src: '/banner/promotion/87c14746-b07e-4dfa-abcc-8b347da4f8ba.jpg', size: { height: 200 } } },
    ];
  }
}
