import { Component, OnInit } from '@angular/core';

import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {Product} from "../product-list/product";
import{User} from "../login/user"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user:User;
  constructor(private cartService:CartService,
              private router:Router) { }

  ngOnInit() {
    this.cartService.getUser().subscribe(User=> {
      this.user = User.user;
    },
      err=> {
        console.log(err);
        return false;
      });

  }

}
