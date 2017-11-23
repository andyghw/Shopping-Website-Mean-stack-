import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {
  products:Product[]
  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getProductList().subscribe(res=>this.products=res);
  }

}
