export enum ProductActionsTypes {
  Get_All_Products = "[Product] Get All products",
  Get_Selected_Products = "[Product] Get selected products",
  Get_Available_Products = "[Product] Get available products",
  Search_Products = "[Product] Search products",
  Add_Product = "[Product] Add products",
  Select_Product = "[Product] Select product",
  Delete_Product = "[Product] Delete product",
  View_Product = "[Product] View product",
  Edit_Product = "[Product] Edit product"



}

export interface ActionEvent{
  type: ProductActionsTypes,
  payload?: any
}
export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR,
  }
  export interface AppDataState<T> {
    dataState : DataStateEnum;
    data?: T,
    errorMessage?:string
    
    
  }