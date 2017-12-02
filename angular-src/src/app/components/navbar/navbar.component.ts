import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";
import {CartService} from "../../services/cart.service";
import {Product} from "../product-list/product";
import {User} from "../login/user";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  search:any;
  user:User;

  itemsincart:Product[];
  number;

  constructor(private authService:AuthService,
              private router: Router,
              private flashMessagesService:FlashMessagesService,
              private  dataService:DataService,
              private cartService:CartService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
      this.cartService.getCartList(this.user.username).subscribe(res=>this.itemsincart=res);
    });

    //this.cartService.getCartList(id).subscribe(res=>this.itemsincart=res);

  }

  doSearch(){
    this.dataService.changeMessage(this.search);
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out',{
      cssClass:'alert-success',timeout:3000
    });
    this.router.navigate(['/login'])
  }
  // onClickCart(){
  //
  //   this.cartService.GoToCart().subscribe(data => {
  //     if(data.success){
  //       console.log(1)
  //       //this.flashMessagesService.show('Added successfully!',{cssClass:'alert-success',timeout:3000});
  //     }
  //     else{
  //       console.log(0)
  //       //this.flashMessagesService.show('Something unexpected happened.',{cssClass:'alert-danger',timeout:3000});
  //     }
  //     this.router.navigate(['/productList']);
  //   });
  // }
}
