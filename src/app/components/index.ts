import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Google Maps
import { AgmCoreModule } from 'angular2-google-maps/core';

//Import our custom modules
import { SeasonsModule } from './seasons/seasons.module'
import { DriversModule } from './drivers/drivers.module'


import { MenuComponent } from './menus/menu.component';
import { DriverDetailsComponent } from './drivers/driver.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationMenusComponent } from './navigation-menus/navigation-menus.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { PipesModule } from '../pipes';
//Import Directives
import { DirectivesModule } from '../directives';


export const COMPONENTS = [
  MenuComponent,
  DriverDetailsComponent,
  CircuitsComponent,
  PageNotFoundComponent,
  NavigationMenusComponent,
  GoogleMapsComponent,
];


@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    SeasonsModule,
    DriversModule,
    DirectivesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf4bgSRANnFPFF8vooBFCItawQVqROcjY'
    })
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }