import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';

import { PipesModule } from '../../pipes';
import { MenuModule} from './../menus/menu.module';
import { DirectivesModule } from '../../directives';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { createTranslateLoader } from './../../services/translate-loader';
import { Http, HttpModule } from '@angular/http';

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
    DirectivesModule
  ],
  declarations: [ResultsComponent],
  exports: [ResultsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultsModule { }