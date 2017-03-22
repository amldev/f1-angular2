import { NgModule } from '@angular/core';

import { SearchPipe } from './search.pipe';
import { WikipediaMobileUrlPipe } from './wikipediaurlmobile.pipe';


export const PIPES = [
  SearchPipe,
  WikipediaMobileUrlPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }