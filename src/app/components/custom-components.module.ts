import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CircuitsModule } from './circuits/circuits.module';
import { SeasonsModule } from './seasons/seasons.module';
import { DriversModule } from './drivers/drivers.module';
import { MenuModule } from './menus/menu.module';
import { ImageModule } from './image/image.module';
import { NavigationMenusModule }from './navigation-menus/navigation-menus.module';


@NgModule({
  imports: [
    SeasonsModule,
    DriversModule,
    CircuitsModule,
    MenuModule,
    NavigationMenusModule,
    ImageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomComponentsModule { }