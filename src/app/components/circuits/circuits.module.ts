import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CircuitsComponent } from './circuits.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';

@NgModule({
  imports: [
    MenuModule,
    PipesModule,
    CommonModule,
    RouterModule
  ],
  declarations: [CircuitsComponent],
  exports: [CircuitsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CircuitsModule { }