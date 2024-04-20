import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriePageRoutingModule } from './categorie-routing.module';

import { CategoriePage } from './categorie.page';
import { HeaderModule } from '../modules/header/header.module';
import { CartBtnModule } from '../modules/cart-count/cart-btn.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriePageRoutingModule,
    HeaderModule,
    CartBtnModule
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}
