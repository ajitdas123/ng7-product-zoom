import {Component} from '@angular/core';
import {Ng7ProductZoomService} from 'ng7-product-zoom';

//import {Ng7ProductZoomImage} from 'ng7-product-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7-product-zoom-tester';
  images = [{
    img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1372819/2016/6/13/11465810731688-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-1.jpg',
    thumb: 'https://assets.myntassets.com/h_68,q_100,w_52/v1/assets/images/1372819/2016/6/13/11465810731688-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-1.jpg'
  }, {
    img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1372819/2016/6/13/11465810731653-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-2.jpg',
    thumb: 'https://assets.myntassets.com/h_68,q_100,w_52/v1/assets/images/1372819/2016/6/13/11465810731653-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-2.jpg'
  }, {
    img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1372819/2016/6/13/11465810731591-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-4.jpg',
    thumb: 'https://assets.myntassets.com/h_68,q_100,w_52/v1/assets/images/1372819/2016/6/13/11465810731591-SEJ-by-Nisha-Gupta-White-160-TC-Cotton-Double-Bedsheet-with-2-Pillow-Covers-7931465810731488-4.jpg'
  }];


  constructor(
    private prodZoomModalService: Ng7ProductZoomService
  ) {
  }

  ngOnInit() {
  }

  openModal() {
    console.log('clicked');
    this.prodZoomModalService.open(this.images);
  }
}
