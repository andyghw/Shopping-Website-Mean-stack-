import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {ProductsService} from "../../services/products.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;
  products:Product[];
  user:Object;
  constructor(private flashMessageService: FlashMessagesService,private productsService:ProductsService,private authService:AuthService,private router: Router,private cartService:CartService) { }
  OnClickaddtocart(product:Product){
    const user={
      name:this.name,
      username:this.username,
      password:this.password,
      email:this.email,
      cartcontent:product
    };
    this.cartService.Addtocart(user).subscribe(data => {
      if(data.success){
        this.flashMessageService.show('Added successfully!',{cssClass:'alert-success',timeout:3000});
      }
      else{
        this.flashMessageService.show('Something unexpected happened.',{cssClass:'alert-danger',timeout:3000});
      }
      this.router.navigate(['/productList']);
    });
  }
  ngOnInit() {
    this.productsService.getProductList().subscribe(res=>this.products=res);
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    });



  }

}
