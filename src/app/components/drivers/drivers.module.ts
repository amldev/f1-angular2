import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DriversComponent } from './drivers.component';

import { PipesModule } from '../../pipes';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule
  ],
  declarations: [DriversComponent],
  exports: [DriversComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DriversModule { }