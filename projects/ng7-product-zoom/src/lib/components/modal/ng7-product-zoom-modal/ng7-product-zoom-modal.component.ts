import { Component, OnInit } from '@angular/core';
import {Ng7ProductZoomImage as Image} from '../../../interface/ng7-product-zoom-image';
import {Ng7ProductZoomService} from '../../../ng7-product-zoom.service';

@Component({
  selector: 'ng7-product-zoom-modal',
  templateUrl: './ng7-product-zoom-modal.component.html',
  styleUrls: ['./ng7-product-zoom-modal.component.scss']
})
export class Ng7ProductZoomModalComponent implements OnInit {

  public images: Image[] = [];

  constructor(private prodZoomModalService: Ng7ProductZoomService) {
  }

  ngOnInit() {
  }

  // close modal
  closeModal() {
    this.prodZoomModalService.close();
  }

  // on click outside modal content
  // close modal
  onClickOutside($event) {
    if (this.prodZoomModalService.isOpen) {
      this.closeModal();
    }
  }

}
