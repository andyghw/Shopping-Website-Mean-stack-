import { Component, OnInit } from '@angular/core';

import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user:Object;
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
