import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CoreModule } from './core.module'

/**
 * Custom module with all my components
 */
import { ComponentsModule } from './components';


//Import Directives
//import { DirectivesModule } from './directives';

//import { PipesModule } from './pipes';

//routing
import { RoutingModule } from './app.routing';

import { AppComponent } from './components/app/app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    RoutingModule,
    ComponentsModule,
    //DirectivesModule,
   //PipesModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }