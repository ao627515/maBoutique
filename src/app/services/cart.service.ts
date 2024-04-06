import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    // private http: HttpClient
  ) { }

  items: {food:Food, qte:number}[] = [];

  addToCart(food: Food) {
    if(this.items.length != 0){
      this.items.forEach(item => {
        if(item.food.id === food.id){
          item.qte++;
        }else{
          this.items.push({food: food, qte: 1});
        }
      });
    }else{
      this.items.push({food: food, qte: 1});
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
