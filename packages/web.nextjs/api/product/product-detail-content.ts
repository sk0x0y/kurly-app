import axios from 'axios';

export function getProductDetailContent(productId: string) {
  return axios.get(`http://localhost:3000/ssr/_next/data/U-R-P-EFAMUfVrHOfIQZ4/goods/${productId}.json`);
}
