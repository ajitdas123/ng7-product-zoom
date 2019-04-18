import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng7ProductZoomComponent } from './ng7-product-zoom.component';
import { Ng7ProductZoomModalComponent } from './components/modal/ng7-product-zoom-modal/ng7-product-zoom-modal.component';
import { Ng7ProductZoomModalContentComponent }
from './components/modal/ng7-product-zoom-modal-content/ng7-product-zoom-modal-content.component';

@NgModule({
  declarations: [Ng7ProductZoomComponent, Ng7ProductZoomModalComponent, Ng7ProductZoomModalContentComponent],
  imports: [
    CommonModule
  ],
  exports: [Ng7ProductZoomComponent],
  entryComponents: [
    Ng7ProductZoomModalComponent
  ]
})
export class Ng7ProductZoomModule { }
