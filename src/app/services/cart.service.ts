import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Food } from "../interfaces/food.interface";
import { Cart } from "../interfaces/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<Cart[]>([]);
  items$ = this.itemsSubject.asObservable();

  private itemIsInCart: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  itemIsInCart$ = this.itemIsInCart.asObservable();

  private items: Cart[] = [];

  constructor() { }

  addToCart(food: Food, qte: number) {
    const existingItem = this.items.find(item => item.food.id === food.id);
    if (existingItem) {
      existingItem.qte += qte;
      if (existingItem.qte === 0) {
        let index = this.items.indexOf(existingItem);

        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }
    } else {
      this.items.push({ food, qte: qte });
    }

    this.itemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }

  getItemIsInCart(foodId: number) {
    const item = this.items.find(item => item.food.id === foodId);
    if (item) {
      this.itemIsInCart.next(true);
    } else {
      this.itemIsInCart.next(false);
    }
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
    return this.items;
  }
}
