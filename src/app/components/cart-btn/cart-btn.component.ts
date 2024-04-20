import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Food } from 'src/app/interfaces/food.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.scss'],
})
export class CartBtnComponent implements OnInit {

  @Input() food: Food | undefined;

  @Input() mode = 'btn';
  @Input() btnSize = 'default';

  itemInCart: Cart | undefined;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.items$.subscribe((items) => {
        this.itemInCart = items.find((item) => item.food.id === this.food?.id);
    });
  }

  addInCart(qte: number) {
    this.cartService.addToCart(this.food!, qte);
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
