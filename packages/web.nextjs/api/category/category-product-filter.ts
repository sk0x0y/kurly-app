import { axiosInstance } from '../index';

export function getCategoryProductFilter(token: string, categoryId: string, subCategoryId?: string) {
  return axiosInstance.get(
    subCategoryId
      ? `/collection/v2/home/sites/market/product-categories/${categoryId + subCategoryId}/filters`
      : `/collection/v2/home/sites/market/product-categories/${categoryId}/filters`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}
