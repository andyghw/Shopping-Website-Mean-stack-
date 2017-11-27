import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {CartComponent} from "./cart.component";
import {AppRoutingModule} from "./app-routing.module";
import {BookmarkComponent} from "./bookmark.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    BookmarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
