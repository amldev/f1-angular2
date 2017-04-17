import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CircuitsComponent } from './circuits.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';
import { NavigationMenusModule } from './../navigation-menus/navigation-menus.module';

//Google Maps
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapsComponent } from './../google-maps/google-maps.component';

//Import Directives
import { DirectivesModule } from '../../directives';


@NgModule({
  imports: [
    MenuModule,
    PipesModule,
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf4bgSRANnFPFF8vooBFCItawQVqROcjY'
    }),
    DirectivesModule,
    NavigationMenusModule
  ],
  declarations: [CircuitsComponent, GoogleMapsComponent],
  exports: [CircuitsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CircuitsModule { }