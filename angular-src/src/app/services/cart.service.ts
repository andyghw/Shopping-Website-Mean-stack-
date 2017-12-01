import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class CartService {
  authToken:any;
  user:any;

  constructor(private  http: Http) { }
  getUser(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/users/profile',{headers:headers}).map(res => res.json());
  }
  loadToken(){
    const  token=localStorage.getItem('id_token');
    this.authToken=token;
  }
  Addtocart(productName,user){

    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.put('http://localhost:3000/users/add-to-cart/'+productName,user,{headers:headers}).map(res => res.json());
  }
  GoToCart(){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/users/cart',{headers:headers}).map(res => res.json());
  }
  getCartList(name){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.get('http://localhost:3000/carts/itemsincart/'+name,{headers:headers}).map(res => res.json());
  }
}
