import { Action } from '@ngrx/store';
import { Product } from './product.model';

export enum ProductActionTypes {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Products Fail',
  CREATE_PRODUCT = '[Product] Create Products',
  CREATE_PRODUCT_SUCCESS = '[Product] Create Product Success',
  CREATE_PRODUCT_FAIL = '[Product] Create Product Fail',
  LOAD_PRODUCT = '[Product] Load Product',
  LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success',
  LOAD_PRODUCT_FAIL = '[Product] Load Product Fail',
  UPDATE_PRODUCT = '[Product] Update Product',
  UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Success',
  UPDATE_PRODUCT_FAIL = '[Product] Update Product Fail',
  DELETE_PRODUCT = '[Product] Delete Product',
  DELETE_PRODUCT_SUCCESS = '[Product] Delete Product Success',
  DELETE_PRODUCT_FAIL = '[Product] Delete Product Fail',

}
// get Products
export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}
export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;
  constructor(public payload: string) {}
}
// create Product
export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT;
  constructor(public payload: Product) {}
}
export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CREATE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// get Product by id
export class LoadProduct implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT;
  constructor(public payload: number) {}
}
export class LoadProductSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// update Product by id
export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}
export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

// update Product by id
export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT;
  constructor(public payload: number) {}
}
export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: number) {}
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}


export type ProductAction =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | LoadProduct
  | LoadProductSuccess
  | LoadProductFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;
