import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelserviceComponent } from './hotelservice.component';

describe('HotelserviceComponent', () => {
  let component: HotelserviceComponent;
  let fixture: ComponentFixture<HotelserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelserviceComponent]
    });
    fixture = TestBed.createComponent(HotelserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
