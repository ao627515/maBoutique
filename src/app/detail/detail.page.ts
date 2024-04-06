import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../interfaces/food.interface';
import { CategorieService } from '../services/categorie.service';
import { FoodsService } from '../services/foods.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  foodId: number|null = null;
  categorieName: string|undefined = '';
  food: Food|undefined;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodsService,
    private categorieService: CategorieService,
    private cartService: CartService
  ) {
    this.foodId = Number(route.snapshot.paramMap.get('id'));
    this.food = this.foodService.getFood(this.foodId);
    this.categorieName = this.food ? this.categorieService.getCategorieName(this.food.categorie_id) : undefined;
  }

  addInCart(){
    this.cartService.addToCart(this.food!);
  }
}

