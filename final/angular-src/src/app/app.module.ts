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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'navbar', component: NavbarComponent},
      {path: 'login', component: LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'register',component:RegisterComponent}
    ]),
    FlashMessagesModule
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
