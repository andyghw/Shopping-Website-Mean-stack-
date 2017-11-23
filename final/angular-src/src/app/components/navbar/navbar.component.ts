import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:any;
  constructor(private authService:AuthService,
              private router: Router,
              private flashMessagesService:FlashMessagesService,
              private  dataService:DataService) { }

  ngOnInit() {



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

}
