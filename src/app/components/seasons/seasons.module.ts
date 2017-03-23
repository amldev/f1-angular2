import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SeasonsComponent } from './seasons.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';
import { NavigationMenusModule } from './../navigation-menus/navigation-menus.module';

@NgModule({
  imports: [
    MenuModule,
    PipesModule,
    CommonModule,
    RouterModule,
    NavigationMenusModule
  ],
  declarations: [SeasonsComponent],
  exports: [SeasonsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeasonsModule { }