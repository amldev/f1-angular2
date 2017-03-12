import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedService } from "./shared.service";
//Import Pipes
import { WikipediaMobileUrlPipe } from './app.pipe';

//routing
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { DriversComponent } from './drivers/drivers.component';
import { SeasonsComponent } from './seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WikipediaMobileUrlPipe,
    DriversComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
