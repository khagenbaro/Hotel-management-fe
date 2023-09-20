import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationserviceComponent } from './reservationservice.component';

describe('ReservationserviceComponent', () => {
  let component: ReservationserviceComponent;
  let fixture: ComponentFixture<ReservationserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationserviceComponent]
    });
    fixture = TestBed.createComponent(ReservationserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
