import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderResponse } from 'src/app/shared/models/orders.model';
import { AppConstants } from 'src/app/configs/app-constants';

import {
  MatSnackBar
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  orderServiceBasePath = `${environment.orderServiceEndpoint}`;
  userServiceBasePath = `${environment.userServiceEndpoint}`;

  constructor(private http: HttpClient, private router: Router,private snackBar: MatSnackBar) {
  }

  listOrders(page:Number=0,size:Number=10,sortValue:String='',sortOrder:String='ASC',searchTerm:String=''){
    return this.http.get<OrderResponse>(`${this.orderServiceBasePath}/orders/list?page=${page}&size=${size}&sortValue=${sortValue}&sortOrder=${sortOrder}&searchKey=${searchTerm}`)
      .pipe(
        catchError((result) => {
          return this.handleError(result);
        })
      );
  }

  placeOrder(orderData){
    return this.http.post(`${this.orderServiceBasePath}/orders`,orderData)
    .pipe(
      catchError((result) => {
        return this.handleError(result);
      })
    );
  }

  getUsersByName(name:String){
    return this.http.get(`${this.userServiceBasePath}/users/name/${name}`)
    .pipe(
      catchError((result) => {
        return this.handleError(result);
      })
    );
  }

  private handleError(error: HttpErrorResponse | any, showToast: boolean = true) {
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {
      try {
        if (showToast && error.status !== 401 && error.status !== 403 && this.snackBar) {
        
          this.snackBar.open(AppConstants.SERVER_ERROR, 'OK', {
            duration: AppConstants.ERROR_DURATION * 1000,
          });
        }
        const err = JSON.stringify(error);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } catch (e) {
        console.error(e);
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(error);
  }

}
