import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedService } from "./shared.service";
//Import Pipes
import { WikipediaMobileUrlPipe } from './pipes/wikipediaurlmobile.pipe';
import { SearchPipe } from './pipes/search.pipe';

//Import Directives
import { DefaultImage } from './directives/defaultimage.directive';

//routing
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menus/menu.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverDetailsComponent } from './components/drivers/driver.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { PageNotFoundComponent } from './components/notfound/not-found.component';
import { NavigationMenusComponent } from './components/navigation-menus/navigation-menus.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WikipediaMobileUrlPipe,
    DriversComponent,
    DriverDetailsComponent,
    SeasonsComponent,
    CircuitsComponent,
    PageNotFoundComponent,
    DefaultImage,
    NavigationMenusComponent,
    SearchPipe
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
