import { ActionReducer, createReducer, on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { Products } from "../modules/products";

export interface ProductState {
  products: Products[];
  loading: boolean,
  error: any
}

export const initialProductState: ProductState = {
  products: [],
  loading: false,
  error: null
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
  }),

  /* Filter Product */
  on(ProductActions.filterProductsByCategory, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductActions.filterProductsByCategorySuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null
  })),
  on(ProductActions.filterProductsByCategoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
