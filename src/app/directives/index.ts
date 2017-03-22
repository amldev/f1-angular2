import { NgModule } from '@angular/core';

import { DefaultImage } from './default-image.directive';

export const DIRECTIVES = [
  DefaultImage,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule { }