import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7ProductZoomComponent } from './ng7-product-zoom.component';

describe('Ng7ProductZoomComponent', () => {
  let component: Ng7ProductZoomComponent;
  let fixture: ComponentFixture<Ng7ProductZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7ProductZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7ProductZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
