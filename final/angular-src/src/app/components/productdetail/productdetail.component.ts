import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ProductsService} from "../../services/products.service";
import {Product} from "../product-list/product";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Location}from '@angular/common'





@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements  OnInit{
  product:Product=new Product;
  id:String;
  url:String;
  user:Object;
  constructor(private productsService:ProductsService,
              private route:ActivatedRoute,
              private flashMessageService: FlashMessagesService,
              private authService:AuthService,
              private router: Router,
              private cartService:CartService,
              private location:Location) {
  }

  ngOnInit(){
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productsService.getProduct(params.get('_id')))
      .subscribe(product => this.product = product);
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    });
    this.url=this.location.path();
    alert(this.url);
  }

  OnClickaddtocart(product:Product){//call the Addtocart method in service.After that,reload this page.

    this.cartService.Addtocart(product.name,this.user).subscribe(data => {

      if(data.success){
        this.flashMessageService.show('Added successfully!',{cssClass:'alert-success',timeout:3000});
      }
      else{
        this.flashMessageService.show('Something unexpected happened.',{cssClass:'alert-danger',timeout:3000});
      }
      this.router.navigate(['/productList']);
    });
    window.location.reload(true)
  }


  OnClickaddtobookmark(url:String){



}

}
