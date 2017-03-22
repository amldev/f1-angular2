import { NgModule  } from '@angular/core';
import { CoreModule } from './core.module'

/**
 * Custom module with all my components
 */
import { ComponentsModule } from './components';

import { SharedService } from "./shared.service";

//Import Directives
import { DirectivesModule } from './directives';

import { PipesModule } from './pipes';

//routing
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    ROUTING,
    ComponentsModule,
    DirectivesModule,
    PipesModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }