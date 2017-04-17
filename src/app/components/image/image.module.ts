import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageComponent],
  exports: [ImageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageModule { }