// category.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.actions';

export const initialState: string = '';

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.selectCategory, (state, { category }) => category)
);
