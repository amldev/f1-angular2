import { NgModule } from '@angular/core';

import { DefaultImage } from './defaultimage.directive';

export const DIRECTIVES = [
  DefaultImage,
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class DirectivesModule { }