import { ActionReducer, createReducer, on } from "@ngrx/store";
import { getProducts, getProductById, clearCart } from "./product.actions";
export const initialState = 0;
export const productReducer = createReducer(
  initialState,
  on(getProducts, (state)=> state + 1),
  on(getProductById, (state)=> state + 1),
  on(clearCart, (state)=> 0)
);
