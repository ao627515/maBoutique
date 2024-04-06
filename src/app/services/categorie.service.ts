import { Injectable } from '@angular/core';
import { Categorie } from '../interfaces/categorie.interface';
import { categories } from '../mocks/categories-mock';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  categories: Categorie[] = [];

  constructor(
  ) {
    this.categories = categories
  }

  getCategories(){
    return this.categories;
  }

  getCategorie(id: number){
    return this.categories.find((cat) => cat.id === id);
  }

  getCategorieName(id: number): string|undefined{
    return this.getCategorie(id)?.name;
  }
}
