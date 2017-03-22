import { NgModule } from '@angular/core';

import { SearchPipe } from './search.pipe';
import { WikipediaMobileUrlPipe } from './wikipedia-url-mobile.pipe';


export const PIPES = [
  SearchPipe,
  WikipediaMobileUrlPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }