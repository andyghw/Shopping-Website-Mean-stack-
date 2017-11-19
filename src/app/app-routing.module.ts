import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent }   from './cart.component';
import {BookmarkComponent} from "./bookmark.component";
const routes:Routes=[
  {path:'cart',component:CartComponent},
  {path:'bookmark',component:BookmarkComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
