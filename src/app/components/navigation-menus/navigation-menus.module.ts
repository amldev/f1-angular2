import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationMenusComponent } from './navigation-menus.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';

import { TranslateModule, TranslateLoader  } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './../../services/translate-loader';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    MenuModule,
    PipesModule,
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
  ],
  declarations: [NavigationMenusComponent],
  exports: [NavigationMenusComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationMenusModule { }