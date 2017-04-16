import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CoreModule } from './core.module'

/**
 * Custom module with all my components
 */
import { ComponentsModule } from './components';
// Import your library
import { KeyboardsEventsModule } from 'ng-2-4keyboard-events';

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
    KeyboardsEventsModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }