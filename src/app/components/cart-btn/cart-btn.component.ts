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

  itemInCart: Cart | undefined;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {

    this.cartService.itemInCart$.subscribe((item: Cart | undefined) => {
      if (item !== undefined && item.food.id === this.food?.id) {
        this.itemInCart = item;
      }else{
        this.itemInCart = undefined;
      }
    });

  }

  addInCart(qte: number) {
    this.cartService.addToCart(this.food!, qte);

    if (this.food) {
      this.cartService.getItemInCart(this.food.id);
    }
  }

}
