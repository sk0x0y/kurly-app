import axios from 'axios';

export function getProductDetailContent(productId: string) {
  return axios.get(
    process.env.NODE_ENV === 'production'
      ? `https://www.kurly.com/_next/data/U-R-P-EFAMUfVrHOfIQZ4/goods/${productId}.json`
      : `http://localhost:3000/ssr/_next/data/U-R-P-EFAMUfVrHOfIQZ4/goods/${productId}.json`
  );
}
