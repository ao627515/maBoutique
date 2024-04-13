import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Food } from 'src/app/interfaces/food.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.items$.subscribe((items: Cart[]) => {
      this.items = items;
    });
  }

  items: Cart[] = [];

  cartItemsCount(){
    let res = 0;
    this.items.forEach((item: Cart) => {
      res += item.qte;
    });

    return res;
  }

}
