import { ActionReducer, createReducer, on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { Products } from "../modules/products";

export interface ProductState {
  products: Products[];
}

export const initialProductState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products: products,
    };
  }),

  on(ProductActions.addProductSuccess, (state, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
    };
  }),

  on(ProductActions.removeProductSuccess, (state, { productId }) => {
    return {
      ...state,
      products: state.products.filter((product) => product.id !== productId),
    };
  })
);
