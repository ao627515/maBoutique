import { Injectable } from '@angular/core';
import { Food } from '../interfaces/food.interface';
import { FOODS } from '../mocks/foods-mock';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  foods: Food[] = [];

  constructor(
  ) {
    this.foods = FOODS;
  }

  getFoods() {
    return this.foods;
  }

  getFoodsByCategorie(categorieId: number|null): Food[] {
    let foodsArray: Food[] = [];
    this.foods.forEach((element) => {
      if (element.categorie_id === categorieId) {
        foodsArray.push(element);
      }
    });
    return foodsArray;
  }


  getFood(id: number) {
    return this.foods.find((cat) => cat.id === id);
  }

}
