import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Check } from './check';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl="http://localhost:8050/check";

  constructor(private httpClient:HttpClient) { }
   Checkout(check:Check):Observable<object>{

    console.log(check);
    return this.httpClient.post(`${this.baseUrl}`,check);
   }
}
