import { Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ProductsService{

  constructor(private http:Http) { }

  getProductList(){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/products').map(res => res.json());
  }



}
