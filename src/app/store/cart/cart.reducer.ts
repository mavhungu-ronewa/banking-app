import { createReducer, on } from '@ngrx/store';
import { Products } from '../../modules/products';
import * as CartActions from './cart.actions';

export interface CartState {
  products: Products[];
}

export const initialCartState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.addToCart, (state, { product }) => {
    return {
      ...state,
      products: [...state.products, product],
    };
  })
);
