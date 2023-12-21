import { createAction } from "@ngrx/store";

export const getProducts = createAction('getProduct');
export const getProductById = createAction('getProductById');
export const clearCart = createAction('clearCart');
