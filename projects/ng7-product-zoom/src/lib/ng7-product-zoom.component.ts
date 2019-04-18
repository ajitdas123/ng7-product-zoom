import {
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef,
  OnDestroy, ViewChild, ElementRef
} from '@angular/core';
import {Ng7ProductZoomModalComponent as ModalComponent} from './components/modal/ng7-product-zoom-modal/ng7-product-zoom-modal.component';
import {Ng7ProductZoomService} from './ng7-product-zoom.service';
import {Ng7ProductZoomImage as Image} from './interface/ng7-product-zoom-image';

@Component({
  selector: 'ng7-product-zoom',
  templateUrl: './ng7-product-zoom.component.html',
  styleUrls: ['./ng7-product-zoom.component.scss']
})
export class Ng7ProductZoomComponent implements OnInit {

  modalComponentRef: ComponentRef<ModalComponent> = null;
  @ViewChild('modalHolder', {read: ViewContainerRef}) modalHolder: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private prodZoomModalService: Ng7ProductZoomService
  ) {
  }

  ngOnInit() {
    this.prodZoomModalService.onOpen.subscribe((images: Image[]) => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
      this.modalHolder.clear();
      this.modalComponentRef = this.modalHolder.createComponent(componentFactory);
      this.modalComponentRef.instance.images = images;
    });

    // on modal close service call
    this.prodZoomModalService.onClose.subscribe(() => this.cleanModalHolder());
  }

  ngOnDestroy() {
    this.prodZoomModalService.onClose.subscribe(() => this.cleanModalHolder());
  }

  // clean any instance of modal
  // inside modal holder element
  cleanModalHolder(...args: any[]) {
    this.modalHolder.clear();
  }

}
