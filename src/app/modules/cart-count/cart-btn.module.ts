import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartBtnComponent } from 'src/app/components/cart-btn/cart-btn.component';



@NgModule({
  declarations: [CartBtnComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CartBtnComponent]
})
export class CartBtnModule {

}
