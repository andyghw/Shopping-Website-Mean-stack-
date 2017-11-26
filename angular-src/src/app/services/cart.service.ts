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
  Addtocart(user){
    let headers=new Headers();
    headers.append('Content-Ytpe','application/json');
    return this.http.post('http://localhost:3000/users/add-to-cart',user,{headers:headers}).map(res => res.json());  }
}
