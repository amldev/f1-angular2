import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Import our custom modules
import { CustomComponentsModule } from './custom-components.module';

//Import custom components

import { DriverDetailsComponent } from './drivers/driver.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Pipes
import { PipesModule } from '../pipes';

export const COMPONENTS = [
  DriverDetailsComponent,
  PageNotFoundComponent,
];


@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    CustomComponentsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }