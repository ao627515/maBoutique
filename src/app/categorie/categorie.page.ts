import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodsService } from '../services/foods.service';
import { CategorieService } from '../services/categorie.service';
import { Food } from '../interfaces/food.interface';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage {

  private categorieId: number|null = null;
  categorieName: string|undefined = '';
  foods: Food[] = [];

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodsService,
    private categorieService: CategorieService
  ) {
    this.categorieId = Number(route.snapshot.paramMap.get('id'));
    this.categorieName = this.categorieService.getCategorieName(this.categorieId);
    this.foods = this.foodService.getFoodsByCategorie(this.categorieId);
  }


}
