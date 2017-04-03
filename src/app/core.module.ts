import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from "./services/shared.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MaterialModule} from '@angular/material';

import { TranslateModule, TranslateLoader  } from 'ng2-translate/ng2-translate';
import { createTranslateLoader } from './services/translate-loader';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        MaterialModule.forRoot(),
    ],
     providers: [SharedService]
})

export class CoreModule {}