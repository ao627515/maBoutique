import { Component, OnInit } from '@angular/core';
import { Categorie } from '../interfaces/categorie.interface';
import { FoodsService } from '../services/foods.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   hero: string[] = [
    "https://source.unsplash.com/1600x900/?food",
    "https://source.unsplash.com/1600x900/?restaurant",
    "https://source.unsplash.com/1600x900/?dining",
    "https://source.unsplash.com/1600x900/?chef",
    "https://source.unsplash.com/1600x900/?cooking"
  ];

  categories: Categorie[] = [];

  constructor(private foodService: FoodsService) {}

  ngOnInit(): void {
    this.categories = this.foodService.getCategories();
  }

}
