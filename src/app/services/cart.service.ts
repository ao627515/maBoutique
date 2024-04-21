import { Injectable, OnInit } from "@angular/core";
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

  private items: Cart[] = [
    {
      food: {
        id: 1,
        img: "https://source.unsplash.com/500x300/?appetizer1",
        name: "Entrée Printanière",
        price: 5000,
        description: "Découvrez notre délicieuse entrée printanière, composée de légumes frais de saison, accompagnés d'une vinaigrette maison légère et parfumée. Un véritable régal pour les papilles et un avant-goût de notre cuisine créative et raffinée.",
        categorie_id: 1,
      },
      qte: 4
    },
    {
      food: {
        id: 2,
        img: "https://source.unsplash.com/500x300/?appetizer2",
        name: "Assiette Gourmande",
        price: 6000,
        description: "Laissez-vous tenter par notre assiette gourmande, un savoureux mélange de saveurs et de textures. Dégustez des bouchées de foie gras, des mini-quiches aux légumes, des brochettes de crevettes marinées et bien plus encore. Un assortiment parfait pour commencer votre repas en beauté.",
        categorie_id: 1,
      },
      qte: 5
    }
  ];

  constructor() {
    this.itemsSubject.next(this.items);
  }

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

  deleteCartItem(itemId: number) {
    console.log(this.items);

    const existingItem = this.items.find(item => item.food.id === itemId);
    if (existingItem) {
      let index = this.items.indexOf(existingItem);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
      this.itemsSubject.next(this.items);
      console.log(this.items);

    }
  }

  sendCart() {
    return this.getItems();
  }
}
