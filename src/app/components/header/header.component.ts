import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/food.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(
    private cartService: CartService
  ) {
    this.items = this.cartService.getItems();
  }

  // ngOnInit() {}

  items: {food:Food, qte:number}[] = [];


}
