import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationMenusComponent } from './navigation-menus.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';
import { ResultsModule } from './../results/results.module';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { createTranslateLoader } from './../../services/translate-loader';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    MenuModule,
    PipesModule,
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
    ResultsModule
  ],
  declarations: [NavigationMenusComponent],
  exports: [NavigationMenusComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationMenusModule { }