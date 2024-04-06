import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    // private http: HttpClient
  ) { }

  items: Food[] = [];

  addToCart(Food: Food) {
    this.items.push(Food);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
