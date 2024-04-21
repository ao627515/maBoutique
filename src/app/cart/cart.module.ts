import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { HeaderModule } from '../modules/header/header.module';
import { CartBtnModule } from '../modules/cart-count/cart-btn.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    HeaderModule,
    CartBtnModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
