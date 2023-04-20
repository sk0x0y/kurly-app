import { axiosInstance } from '../index';

export function getCategoryPageMeta(token: string, categoryId: string, subCategoryId?: string) {
  return axiosInstance.get(
    subCategoryId
      ? `/collection/v2/home/product-categories/${categoryId + subCategoryId}`
      : `/collection/v2/home/product-categories/${categoryId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}
