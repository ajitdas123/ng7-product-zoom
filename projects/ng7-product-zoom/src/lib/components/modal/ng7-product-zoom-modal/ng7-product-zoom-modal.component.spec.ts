import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7ProductZoomModalComponent } from './ng7-product-zoom-modal.component';

describe('Ng7ProductZoomModalComponent', () => {
  let component: Ng7ProductZoomModalComponent;
  let fixture: ComponentFixture<Ng7ProductZoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7ProductZoomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7ProductZoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
