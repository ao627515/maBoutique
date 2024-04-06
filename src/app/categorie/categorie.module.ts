import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriePageRoutingModule } from './categorie-routing.module';

import { CategoriePage } from './categorie.page';
import { HeaderModule } from '../modules/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriePageRoutingModule,
    HeaderModule
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}
