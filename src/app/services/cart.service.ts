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

  constructor() { }

   items: Cart[] = [];

  addToCart(food: Food, qte: number) {
    const existingItem = this.items.find(item => item.food.id === food.id);
    if (existingItem) {
      existingItem.qte += qte;
    } else {
      this.items.push({ food, qte: qte });
    }
    this.itemsSubject.next(this.items); // Émettre la nouvelle valeur
  }

  getItems() {
    return this.items;
  }

  getItemInCart(foodId: number) {
    // this.items.forEach((item:any) => {
    //   if (item.food.id === foodId) return item.qte;
    // });

    // return 0;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items); // Émettre la nouvelle valeur
    return this.items;
  }
}
