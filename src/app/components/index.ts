import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Import our custom modules
import { CircuitsModule } from './circuits/circuits.module';
import { SeasonsModule } from './seasons/seasons.module';
import { DriversModule } from './drivers/drivers.module';
import { MenuModule } from './menus/menu.module';

//Import custom components
//import { MenuComponent } from './menus/menu.component';
import { DriverDetailsComponent } from './drivers/driver.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationMenusComponent } from './navigation-menus/navigation-menus.component';

//Pipes
import { PipesModule } from '../pipes';
//Import Directives
import { DirectivesModule } from '../directives';


export const COMPONENTS = [
  DriverDetailsComponent,
  PageNotFoundComponent,
  NavigationMenusComponent,
  
];


@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    SeasonsModule,
    DriversModule,
    CircuitsModule,
    MenuModule,
    DirectivesModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }