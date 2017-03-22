import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Google Maps
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MenuComponent } from './menus/menu.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverDetailsComponent } from './drivers/driver.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { PageNotFoundComponent } from './notfound/not-found.component';
import { NavigationMenusComponent } from './navigation-menus/navigation-menus.component';
import { GoogleMapsComponent } from './googlemaps/google-maps.component';
import { PipesModule } from '../pipes';


export const COMPONENTS = [
  MenuComponent,
  DriverDetailsComponent,
  DriversComponent,
  CircuitsComponent,
  PageNotFoundComponent,
  SeasonsComponent,
  NavigationMenusComponent,
  GoogleMapsComponent,
  
];


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf4bgSRANnFPFF8vooBFCItawQVqROcjY'
    })
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }