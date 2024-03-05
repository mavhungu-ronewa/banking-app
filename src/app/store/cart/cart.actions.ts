import { createAction, props } from '@ngrx/store';
import { Products } from '../../modules/products';

export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Products }>());
