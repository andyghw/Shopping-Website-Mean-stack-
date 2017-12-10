import { Component, OnInit } from '@angular/core';

export class Buyer{
  constructor(
  name:string,
  phone:number,
  ){}
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  buyer:Buyer;

  constructor() { }

  ngOnInit() {
  }

  
}
