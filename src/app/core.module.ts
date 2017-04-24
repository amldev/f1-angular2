import { NgModule   } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from "./services/shared.service";
import { RequestService } from "./services/request.service";
import { DriversService } from "./services/drivers.service";
import { CircuitsService } from "./services/circuits.service";
import { ConstructorsService } from "./services/constructors.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ],
     providers: [SharedService, RequestService, DriversService, CircuitsService, ConstructorsService]
})

export class CoreModule {}