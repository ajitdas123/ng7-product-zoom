import {EventEmitter, Injectable} from '@angular/core';
import _ from 'lodash';
import {Ng7ProductZoomImage as Image} from './interface/ng7-product-zoom-image';

@Injectable({
  providedIn: 'root'
})
export class Ng7ProductZoomService {
  onOpen: EventEmitter<Image[]> = new EventEmitter();
  onClose: EventEmitter<any> = new EventEmitter();
  isOpen = false;

  constructor() {
  }

  // open (show) modal
  open(images: Image[]) {
    if (images && !_.isEmpty(images)) {
      this.onOpen.emit(images);
      setTimeout(() => this.isOpen = true, 100);
    } else {
      console.warn('Error: Please provide images for ecom-product-zoom-modal!');
    }
  }

  // close (hide) modal
  close() {
    this.isOpen = false;
    this.onClose.emit();
  }
}
