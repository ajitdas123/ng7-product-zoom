import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7ProductZoomModalContentComponent } from './ng7-product-zoom-modal-content.component';

describe('Ng7ProductZoomModalContentComponent', () => {
  let component: Ng7ProductZoomModalContentComponent;
  let fixture: ComponentFixture<Ng7ProductZoomModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7ProductZoomModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7ProductZoomModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
