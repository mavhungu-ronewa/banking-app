// category.actions.ts
import { createAction, props } from '@ngrx/store';

export const selectCategory = createAction('[Category] Select Category', props<{ category: string }>());
