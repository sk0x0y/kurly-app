import axios from 'axios';

export function getProductDetailContent(productId: string) {
  const buildId = 'MnwifophqZw_aW1XmUz9v';

  return axios.get(
    process.env.NODE_ENV === 'production'
      ? `https://www.kurly.com/_next/data/${buildId}/goods/${productId}.json`
      : `http://localhost:3000/ssr/_next/data/${buildId}/goods/${productId}.json`,
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'ko-KR,ko;q=0.9',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
      },
    }
  );
}
