export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
export interface AppDataState<T>
{
  DataState:DataStateEnum;
  data?:T;
  errorMessage?:string;
}
