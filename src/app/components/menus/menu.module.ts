import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

import { PipesModule } from '../../pipes';

import { TranslateModule, TranslateLoader  } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './../../services/translate-loader';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { }