import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.kurly.com' : '/api',
  timeout: 3000,
});

export { getToken } from './token';

export { getMainBanner } from './main-banner';
export { getTodayRecommendation } from './today-recommendation';
export { getRandomCollection } from './random-collection';
export { getMdChoice } from './md-choice';

export { getNewProduct } from './market/new-product';
export { getBestProduct } from './market/best-product';
export { getBudgetProduct } from './market/budget-product';
export { getPromotion } from './market/promotion';
export { getMarketProductMeta } from './market/market-product-meta';

export { getCategoryGroup } from './category/category-group';
export { getCategory } from './category/get-category';
export { getCategoryProduct } from './category/category-product';

export { getCollectionFilter } from './get-collection-filter';

export { getCategoryProductFilter } from './category/category-product-filter';
export { getCategoryPageMeta } from './category/category-page-meta';

export { getSearch } from './search';
