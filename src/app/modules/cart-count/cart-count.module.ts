import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartCountBtnComponent } from 'src/app/components/cart-count-btn/cart-count-btn.component';
import { IonicModule } from '@ionic/angular';
import { CartBtnComponent } from 'src/app/components/cart-btn/cart-btn.component';



@NgModule({
  declarations: [CartCountBtnComponent, CartBtnComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CartCountBtnComponent, CartBtnComponent]
})
export class CartCountModule {

}
