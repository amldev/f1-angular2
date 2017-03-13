import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedService } from "./shared.service";
//Import Pipes
import { WikipediaMobileUrlPipe } from './pipes/app.pipe';

//routing
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menus/menu.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CircuitsComponent } from './components/circuits/circuits.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WikipediaMobileUrlPipe,
    DriversComponent,
    SeasonsComponent,
    CircuitsComponent
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
