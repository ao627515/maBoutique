import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { HeaderModule } from '../modules/header/header.module';
import { CartCountModule } from '../modules/cart-count/cart-count.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    HeaderModule,
    CartCountModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
