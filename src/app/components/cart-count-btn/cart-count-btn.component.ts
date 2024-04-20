import { Component, Input, OnInit, input } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Food } from 'src/app/interfaces/food.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-count-btn',
  templateUrl: './cart-count-btn.component.html',
  styleUrls: ['./cart-count-btn.component.scss'],
})
export class CartCountBtnComponent implements OnInit {

  @Input() food: Food | undefined;

  @Input() mode = 'btn';
  @Input() btnSize = 'default';

  itemInCart: Cart | undefined;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.itemInCart$.subscribe((item: Cart | undefined) => {
      if (item !== undefined && item.food.id === this.food?.id) {
        this.itemInCart = item;
      } else {
        this.itemInCart = undefined;
      }
    });
  }

  addInCart(qte: number) {
    this.cartService.addToCart(this.food!, qte);

    if (this.food !== undefined) {
      this.cartService.getItemInCart(this.food.id);
    }
  }

  coloumSizes() {
    let size: number[] = [];
    switch (this.btnSize) {
      case 'default':
      case 'large':
        size = [2, 8, 2];
        break;
      case 'small':
        size = [4, 4, 4];
        break;
    }
    return size;
  }

}
