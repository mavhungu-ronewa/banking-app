import { createAction, props } from "@ngrx/store";
import { Products } from "../modules/products";

export const getProducts = createAction('getProduct');
export const getProductById = createAction('getProductById');
export const clearCart = createAction('clearCart');

/* Ronewa Mavhungu */

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: any[] }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: any }>());

export const addProduct = createAction('[Product] Add Product', props<{ product: any }>());
export const addProductSuccess = createAction('[Product] Add Product Success', props<{ product: any }>());
export const addProductFailure = createAction('[Product] Add Product Failure', props<{ error: any }>());

export const removeProduct = createAction('[Product] Remove Product', props<{ productId: string }>());
export const removeProductSuccess = createAction('[Product] Remove Product Success', props<{ productId: string }>());
export const removeProductFailure = createAction('[Product] Remove Product Failure', props<{ error: any }>());

export const updateProduct = createAction('[Product] Update Product', props<{ product: any }>());
export const updateProductSuccess = createAction('[Product] Update Product Success', props<{ product: any }>());
export const updateProductFailure = createAction('[Product] Update Product Failure', props<{ error: any }>());

export const filterProductsByCategory = createAction('[Product] Filter Products By Category', props<{ category: string }>());
export const filterProductsByCategorySuccess = createAction('[Product] Filter Products By Category Success', props<{ products: Products[] }>());
export const filterProductsByCategoryFailure = createAction('[Product] Filter Products By Category Failure', props<{ error: any }>());
