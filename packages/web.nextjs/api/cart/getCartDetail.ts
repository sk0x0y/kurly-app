import { axiosInstance } from '../index';
import { ISelectedProduct } from '../../infrastructure/interface/selectedProduct.interface';

export function getCartDetail(token: string, selectedProduct: ISelectedProduct[]) {
  return axiosInstance.post(
    '/carts/v1/detail',
    {
      address: '',
      addressDetail: '',
      // cartItems: [
      //   {
      //     dealProductNo: 11073803,
      //     quantity: 1,
      //   },
      // ],
      cartItems: selectedProduct.map(selected => ({ dealProductNo: selected.no, quantity: selected.count })),
    },
    { headers: { Authorization: `Bearer ${token}` } }

    // {
    //   headers: {
    //     accept:
    //       'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    //     'accept-language': 'ko-KR,ko;q=0.9',
    //     'user-agent':
    //       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    //   },
    // }
  );
}
