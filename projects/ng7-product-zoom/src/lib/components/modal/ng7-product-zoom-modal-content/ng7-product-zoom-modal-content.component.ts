import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'ng7-product-zoom-modal-content',
  templateUrl: './ng7-product-zoom-modal-content.component.html',
  styleUrls: ['./ng7-product-zoom-modal-content.component.scss']
})
export class Ng7ProductZoomModalContentComponent implements OnInit {

  @Input() images = [];
  @ViewChild('imageScrollContainer') imageScrollContainer: ElementRef;
  activeImage: any = null;

  get activeImageIndex(): number {
    return _.indexOf(this.images, this.activeImage);
  }
  ngOnInit() {
    // set active image
    this.activeImage = (this.images.length) ? this.images[0] : null;
  }

  // set active image
  activateImage(image: any) {
    this.activeImage = image;

    // scroll image container to top
    this.imageScrollContainer.nativeElement.scrollTop = 0;
  }

  // chage active image
  imageChange(next: boolean) {
    if(next && this.activeImageIndex != (this.images.length - 1)){
      this.activeImage = this.images[this.activeImageIndex + 1];
    }
    else if(!next && this.activeImageIndex != 0){
      this.activeImage = this.images[this.activeImageIndex - 1];
    }
  }

  // when mouse move on image scroll container
  onMouseMove($event) {
    let elem = this.imageScrollContainer.nativeElement;
    let elemHeight = elem.offsetHeight;
    let scrollHeight = elem.scrollHeight;
    let scrolledAmount = elem.scrollTop;
    let clientY = $event.clientY;

    // auto scroll
    // scrollTop = yMousePos * ((hiddenScroll - elementHeight) / effectArea)
    elem.scrollTop = clientY * ( (scrollHeight - elemHeight) / (elemHeight / 2) );
  }

  // when input images changes
  // set new active image
  ngOnChanges(changes: SimpleChanges) {
    this.activeImage = (this.images.length) ? this.images[0] : null;
  }

}
