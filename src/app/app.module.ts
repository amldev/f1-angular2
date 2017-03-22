import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Custom module with all my components
 */
import { ComponentsModule } from './components';

import { SharedService } from "./shared.service";

//Import Directives
import { DefaultImage } from './directives/defaultimage.directive';

//routing
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultImage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING,
    ComponentsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }