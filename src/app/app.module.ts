import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedService } from "./shared.service";
//Import Pipes
import { WikipediaMobileUrlPipe } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WikipediaMobileUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
