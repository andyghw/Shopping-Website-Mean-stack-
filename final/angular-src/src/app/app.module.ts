import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import {ValidateService} from "./services/validate.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from "./guard/auth.guard";
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'navbar', component: NavbarComponent},
      {path: 'login', component: LoginComponent},
      {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
      {path:'register',component:RegisterComponent},
      {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]}
    ]),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }