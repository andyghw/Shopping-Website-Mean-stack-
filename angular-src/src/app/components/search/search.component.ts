import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {DataService} from "../../services/data.service";
import {Product} from "../product-list/product";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ProductsService]
})
export class SearchComponent implements OnInit {
  search:any;
  products:Product[]
  constructor(private productsService:ProductsService,private  dataService:DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(mes=>{
      this.search=mes
    })
    this.productsService.getProductList().subscribe(res=>this.products=res);
  }

}
