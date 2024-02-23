import {createFeature, createFeatureSelector, createSelector} from '@ngrx/store';
import { ProductState, productReducer } from './product.reducer';

const productFeatureKey = 'products';

// Get the entire product state
export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

// Get the list of products
export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

// Get a specific product by ID
export const selectProductById = (productId: string) => createSelector(
  selectProductState,
  (state: ProductState) => state.products.find((product) => product.id === productId)
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer: productReducer
})
