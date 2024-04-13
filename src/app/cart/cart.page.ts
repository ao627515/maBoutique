import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Food } from '../interfaces/food.interface';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  foods: Cart[] = [];

  constructor(
    private cartService: CartService
  ) {
    this.foods = this.cartService.getItems();
  }

}
