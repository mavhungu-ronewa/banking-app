// product.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FlightService } from "../services/flight.service";
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
    ofType(ProductActions.loadProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
      map((products) => ProductActions.loadProductsSuccess({products})),
      catchError(() => EMPTY)
    ))
  ));

  constructor(private actions$: Actions, private productService: FlightService) {}
}
