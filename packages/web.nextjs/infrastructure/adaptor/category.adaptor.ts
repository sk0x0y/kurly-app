import { CategoryUsecase } from '../../application/usecases/category.usecase';
import { CategoryInteractor } from '../interactor/category.interactor';

export const CategoryAdaptor = {
  categoryInteractor: new CategoryInteractor(new CategoryUsecase()),
};

// export class CategoryAdaptor {}

// import { immerable } from 'immer';
// import { ContextMenuEntity } from '../../application/entities/contextMenuEntity';
//
// export class ContextMenuInteractor {
//   [immerable] = true;
//   contextMenuEntity: ContextMenuEntity;
//
//   constructor() {
//     this.contextMenuEntity = new ContextMenuEntity();
//   }
// }
