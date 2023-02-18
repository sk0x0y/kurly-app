export interface IStore<T, U> {
  dispatch: T;
  entity: U;
}
export type Store<T, U> = () => IStore<T, U>;
