import { Injectable } from '@angular/core';
import { Categorie } from '../interfaces/categorie.interface';
import { categories } from '../mocks/categories-mock';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  categories: Categorie[] = [];

  constructor(
  ) {
    this.categories = categories
  }

  getCategories(){
    return this.categories;
  }
}
